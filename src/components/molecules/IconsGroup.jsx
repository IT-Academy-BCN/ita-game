import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  IconHome,
  IconList,
  IconProfile,
  IconHistorial,
  IconWiki,
} from "../atoms"

const IconsGroup = () => {
  const location = useLocation()
  return (
    <div className="flex justify-between">
      <NavLink
        to="/home"
        className={`${
          location.pathname === "/home" || location.pathname === "/admin"
            ? "text-primary"
            : ""
        }`}
      >
        <IconHome>Inicio</IconHome>
      </NavLink>
      <NavLink
        to="/leaderboard"
        className={`${
          location.pathname === "/leaderboard" ? "text-primary" : ""
        }`}
      >
        <IconList>Ránking</IconList>
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
        to="/wiki"
        className={`${
          location.pathname === "/wiki" ||
          location.pathname === "/wiki/resource"
            ? "text-primary"
            : ""
        }`}
      >
        <IconWiki />
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
