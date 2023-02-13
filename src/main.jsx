import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './store/authentication/AuthContext';
import App from './App';
import './index.css';
import { WikiContextProvider } from './store/wikiContext/WikiContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <WikiContextProvider>
        <App />
      </WikiContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
