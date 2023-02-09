import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './store/authentication/AuthContext';
import App from './App';
import './index.css';
console.warn('R E C O R D A R 😇  borrar vuestros console.log a la hora de hacer el pull request 🙊🙉🙈')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
