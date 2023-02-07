import { useContext, useEffect, useState } from "react"
import { UserContext } from "../store/UserContext"
import { Actions } from "../store/userReducer"
import { Navbar, FooterMenu } from "../components"

function Home() {
  const { state, dispatch } = useContext(UserContext)
  const { users } = state
  const [newUser, setNewUser] = useState({})
  const [id, setId] = useState(users.length)

  // dispatch genera un side efffect (por setear el state (setState))y por eso en useEffect
  useEffect(() => {
    dispatch({
      type: Actions.ADD_USER,
      payload: newUser,
    })
    setId(id + 1)
  }, [newUser])

  const handleNewUser = () => {
    let fakeUser = {
      id: id,
      name: "NewUser",
      ITAProfile: "Frontend",
      ITAFramework: "React",
      ITApoints: 100,
    }
    setNewUser(fakeUser)
  }

  return (
    <div className="relative bg-[#EBEBEB] w-screen h-screen">
      <Navbar>Resumen Semanal</Navbar>
      <FooterMenu />
    </div>
  )
}

export default Home
{
  /* {users !== undefined
      ? users.map((user) => (
          <ul style={{ border: "1px black solid" }} key={user.id}>
            <li>{user.name}</li>
            <li>{user.ITAProfile}</li>
            <li>{user.ITApoints}</li>
          </ul>
        ))
      : "loading"}

    <button
      className="btn w-64 rounded-full"
      onClick={handleNewUser}
      style={{ border: "1px black solid" }}
    >
      Add New User
    </button> */
}
