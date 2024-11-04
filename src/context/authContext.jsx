import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { axiosClient } from '../server/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('@Auth:token') || null);
  const [user, setUser] = useState(null)
  const [signed, setSigned] = useState(false);

  const isValidToken = (token) => {
    if (!token) return false;

    const parts = token.split('.');
    if (parts.length !== 3) {
      console.warn("Token com estrutura incorreta");
      return false;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp && decoded.exp < currentTime) {
        console.warn("Token expirado");
        return false;
      }
      setUser(decoded);
      return true;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return false;
    }
  };

  useEffect(() => {
    const loadStoredToken = () => {
      const storedToken = localStorage.getItem('@Auth:token');

      if (storedToken && isValidToken(storedToken)) {
        setToken(storedToken);
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        setSigned(true);
      } else {

        signOut();
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


        if (isValidToken(accessToken)) {
          setToken(accessToken);
          axiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          localStorage.setItem('@Auth:token', accessToken);
          setSigned(true);
        } else {
          alert("Token inválido ou expirado.");
          signOut();
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const signOut = () => {
    localStorage.removeItem('@Auth:token');
    setToken(null);
    setUser(null);
    setSigned(false);
    delete axiosClient.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        signIn,
        signOut,
        signed,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
