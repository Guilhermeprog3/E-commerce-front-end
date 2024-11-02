import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterManager } from './routes/RouterManager.jsx';
import './styles/globalStyles.css';
import { AuthProvider } from './context/authContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterManager />
    </AuthProvider>
  </StrictMode>
);
