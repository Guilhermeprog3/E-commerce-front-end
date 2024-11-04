import { createContext, useState, useEffect } from 'react';
import { axiosClient } from '../server/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('@Auth:token') || null);


  const signed = !!token;

  useEffect(() => {
    const loadStoredToken = () => {
      const storedToken = localStorage.getItem('@Auth:token');
      if (storedToken) {
        setToken(storedToken);
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
    };
    loadStoredToken();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await axiosClient.post('/login', { email, password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        const accessToken = response.data.access_token;
        setToken(accessToken);
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        localStorage.setItem('@Auth:token', accessToken);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const signOut = () => {
    localStorage.clear();
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
        signOut,
        signed,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
