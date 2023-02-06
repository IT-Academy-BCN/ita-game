import { createContext, useMemo, useReducer } from 'react'
import { initialState, userReducer } from './userReducer'

// este context lo iré utilizando para llamar a useContext
// es decir, lo llamo y con eso habilito poder utilizar lo que esté dentro del provider:
// acceder al estado y a las fc que actualizan al estado
const UserContext = createContext(initialState)

// este provider es un mock para exportarlo y tener la lógica del provider aquí(cual hook)
function UserProvider({ children }) {
  // utilizo reducer creado y destructuro estado y dispatch (funciones de actualización)
  const [state, dispatch] = useReducer(userReducer, initialState)

  // useMemo=>hook para memorizar lo que no ha cambiado
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext }

export default UserProvider
