import { useContext } from "react"
import { Navbar, FooterMenu, UserCard } from "../components"
import { WeeklyResume } from "../components"
import { AuthContext } from "../store/authentication/AuthContext"

function Home() {
  const { state } = useContext(AuthContext)
  const { user } = state

  return (
    <div className="relative w-screen h-screen bg-base">
      <Navbar>Resumen Semanal</Navbar>
      <div className="flex items-start p-6">
        <h1 className="font-bold text-3xl">Hola {user.name}!</h1>
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
      <div className="flex justify-center items-center py-3">
        <WeeklyResume />
      </div>
      <FooterMenu />
    </div>
  )
}

export default Home
