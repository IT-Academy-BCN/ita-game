import React from "react"
import { IconArrow, IconInfo } from "./atoms"

function Navbar({ children }) {
  return (
    <div className="flex w-full justify-between items-center text-center bg-black text-white p-4  rounded-b-xl">
      <IconArrow />
      {children}
      <IconInfo />
    </div>
  )
}

export default Navbar
