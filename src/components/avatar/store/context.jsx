import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const AvatarContext = createContext(initialState);

export default function AvatarProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  );
}
