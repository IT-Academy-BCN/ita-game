import React from "react"
import ReactDOM from "react-dom/client"
import AuthProvider from "./store/authentication/AuthContext"
import App from "./App"
import "./index.css"
import { WikiContextProvider } from "./store/wikiContext/WikiContext"
import { ActivitiesContextProvider } from "./store/activitiesContext/ActivitiesContext"
import {
  UsersContext,
  UsersContextProvider,
} from "./store/usersApi/UsersContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UsersContextProvider>
        <WikiContextProvider>
          <ActivitiesContextProvider>
            <App />
          </ActivitiesContextProvider>
        </WikiContextProvider>
      </UsersContextProvider>
    </AuthProvider>
  </React.StrictMode>
)
