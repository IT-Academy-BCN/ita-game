import axios from "axios"
import { createContext, useState, useEffect } from "react"
import { apiUrl } from "../../constants/constants"

export const UsersContext = createContext()

export const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState([])

  const getUser = async (id) => {
    try {
      const resp = await axios.get(
        `https://itacademy.onrender.com/api/users/${id}`
      )
      console.log("prueba", resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser("63e645c760e6610040667efd")
  }, [])

  return (
    <UsersContext.Provider value={{ getUser }}>
      {children}
    </UsersContext.Provider>
  )
}
