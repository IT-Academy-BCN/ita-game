import { useContext } from "react"
import { Navbar, FooterMenu, UserCard } from "../components"
import { WeeklyResume } from "../components"
import { AuthContext } from "../store/authentication/AuthContext"
import { UsersContext } from "../store/usersApi/UsersContext"

function Home() {
  const { user } = useContext(UsersContext)

  return (
    <>
      <Navbar>Resumen Semanal</Navbar>
      <div className="w-full h-full bg-base pt-12 pb-12">
        <div className="flex items-start p-6">
          <h1 className="font-bold text-3xl">Hola !</h1>
        </div>
        <div className="flex items-start ml-6">
          <p className="font-bold">Puntos ganados</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <UserCard />
        </div>
        <div className="flex items-start ml-6 mt-4">
          <p className="font-bold">Estado de la semana</p>
        </div>
        <div className="flex justify-center items-center">
          <WeeklyResume />
        </div>
      </div>
      <FooterMenu />
    </>
  )
}

export default Home
