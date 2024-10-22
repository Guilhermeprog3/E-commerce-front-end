import { createContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { axiosClient } from '../server/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Alterado para usar apenas o token

  useEffect(() => {
    const loadingStoreData = () => {
      const storageToken = localStorage.getItem('@Auth:token');

      if (storageToken) {
        setToken(storageToken);
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${storageToken}`; // Definindo o token no header
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await axiosClient.post('/login', { email, password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        const accessToken = response.data.access_token;
        setToken(accessToken); // Armazenando o token no estado
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        localStorage.setItem('@Auth:token', accessToken); // Armazenando apenas o token no localStorage
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    localStorage.clear();
    setToken(null); // Limpando o token
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
        signOut,
        signed: !!token, // A verificação de autenticação é baseada na existência do token
      }}>
      {children}
    </AuthContext.Provider>
  );
};
