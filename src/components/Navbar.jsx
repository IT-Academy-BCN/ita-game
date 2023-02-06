import React from "react"
import { Link } from "react-router-dom"
import { IconArrow, IconInfo } from "./atoms"

function Navbar({ children }) {
  return (
    <div className="flex w-full justify-between items-center text-center bg-black text-white p-4 rounded-b-xl">
      <Link to={"/"}>
        <IconArrow />
      </Link>
      {children}
      <IconInfo />
    </div>
  )
}

export default Navbar
