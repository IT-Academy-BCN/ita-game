import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { AuthContextProvider } from './store/authentication/authContext';
import { WikiContextProvider } from './store/wikiContext/WikiContext';
import { ActivitiesContextProvider } from './store/activitiesContext/ActivitiesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
