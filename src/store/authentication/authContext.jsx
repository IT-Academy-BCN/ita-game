import { createContext, useMemo, useReducer } from "react"
import { initialState, AuthReducer } from "./AuthReducer"

const AuthContext = createContext(initialState)

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext }

export default AuthProvider
