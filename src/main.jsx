import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './store/authentication/authContext';
import App from './App';
import './index.css';
import { WikiContextProvider } from './store/wikiContext/WikiContext';
import { ActivitiesContextProvider } from './store/activitiesContext/ActivitiesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WikiContextProvider>
        <ActivitiesContextProvider>
          <App />
        </ActivitiesContextProvider>
      </WikiContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
