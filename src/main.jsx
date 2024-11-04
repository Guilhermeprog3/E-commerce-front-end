import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterManager } from './routes/RouterManager.jsx';
import './styles/globalStyles.css';
import { AuthProvider } from './context/authContext.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterManager />
      </Provider>
    </AuthProvider>
  </StrictMode>
);
