import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProvider from './store/UserContext';
import AuthProvider from './store/authentication/AuthContext';
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
)
