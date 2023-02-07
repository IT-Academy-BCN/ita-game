import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { IconHome, IconList, IconProfile, IconHistorial } from "../atoms"

const IconsGroup = () => {
  const location = useLocation()
  return (
    <div className="flex justify-between mx-6">
      <NavLink
        to="/"
        className={`${location.pathname === "/" ? "text-primary" : ""}`}
      >
        <IconHome>Inicio</IconHome>
      </NavLink>
      <NavLink
        to="/leaderboard"
        className={`${
          location.pathname === "/leaderboard" ? "text-primary" : ""
        }`}
      >
        <IconList>Competición</IconList>
      </NavLink>
      <NavLink
        to="/historical"
        className={`${
          location.pathname === "/historical" ? "text-primary" : ""
        }`}
      >
        <IconHistorial>Historial</IconHistorial>
      </NavLink>
      <NavLink
        to="/profile"
        className={`${location.pathname === "/profile" ? "text-primary" : ""}`}
      >
        <IconProfile>Perfil</IconProfile>
      </NavLink>
    </div>
  )
}

export default IconsGroup
