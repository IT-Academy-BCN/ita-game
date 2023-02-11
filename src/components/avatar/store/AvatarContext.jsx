import { createContext, useMemo, useReducer } from 'react'
import reducer from './reducer'

const initialState = {}

const AvatarContext = createContext(initialState)

export default function AvatarContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  )
}
