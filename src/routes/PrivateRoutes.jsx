import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../context/authContext';

export const PrivateRoute = () => {
  const { signed } = useContext(AuthContext); // Verificação baseada no token
  return signed ? <Outlet /> : <Navigate to="/" />; // Se o token existir, o usuário pode acessar as rotas privadas
};
