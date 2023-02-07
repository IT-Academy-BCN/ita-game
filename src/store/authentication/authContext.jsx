import { createContext, useMemo, useReducer } from 'react'
import { initialState, authReducer } from './authReducer'

const AuthContext = createContext(initialState)

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

export { AuthContext }

export default AuthProvider