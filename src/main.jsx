import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterManager } from './routes/RouterManager.jsx';
import './styles/globalStyles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterManager />
  </StrictMode>
);
