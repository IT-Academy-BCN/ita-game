import axios from "axios"
import { createContext, useState, useEffect } from "react"
import { apiUrl } from "../../constants/constants"

export const UsersContext = createContext()

const currentUser = {
  id: "63e9d29bb04cb600417abcb6",
  name: "Ona Costa",
  points: 80,
}
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5ZDA1OGIwNGNiNjAwNDE3YWJjYWUiLCJpYXQiOjE2NzYyNjc3MjZ9.4NFtPYgOQnQbWeAQ3Ow0qhyeMszw8cqC5TlOBRlaynM"
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

export const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUser = async () => {
      try {
        const resp = await axios.get(
          `${apiUrl.users}/${currentUser.id}`,
          options
        )
        if (resp.status === 200) {
          const { data } = resp
          setUser(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  return (
    <UsersContext.Provider value={{ user }}>{children}</UsersContext.Provider>
  )
}
