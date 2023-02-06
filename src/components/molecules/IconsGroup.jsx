import React from "react"
import { NavLink } from "react-router-dom"
import { IconHome, IconList, IconProfile, IconHistorial } from "../atoms"

const IconsGroup = () => {
  return (
    <div className="flex justify-between mx-6">
      <NavLink to="/">
        <IconHome>Inicio</IconHome>
      </NavLink>
      <IconList>Competición</IconList>
      <IconHistorial>Historial</IconHistorial>
      {/* <NavLink to="/profile" className="active:text-[#B0F41F]"> */}
      <IconProfile>Perfil</IconProfile>
      {/* </NavLink> */}
    </div>
  )
}

export default IconsGroup
