import axios from "axios"
import { createContext, useState, useEffect } from "react"
import { apiUrl } from "../../constants/constants"

export const UsersContext = createContext()

export const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState([])

  const getUser = async () => {
    try {
      const resp = await axios.get(
        `https://itacademy.onrender.com/api/users/${id}`
      )
      if (resp.status === 200) {
        const { data } = resp
        setUser(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UsersContext.Provider value={{ getUser }}>
      {children}
    </UsersContext.Provider>
  )
}
