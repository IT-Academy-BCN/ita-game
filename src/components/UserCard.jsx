import React, { useContext } from "react"
import { AuthContext } from "../store/authentication/AuthContext"
import { AvatarTemp } from "./index"

const UserCard = () => {
  const { state } = useContext(AuthContext)
  const { user } = state

  return (
    <div className="card flex flex-row justify-between items-center p-4 my-2 mx-6 bg-white w-[90%]">
      <div className="flex flex-row">
        <AvatarTemp>
          <span className="flex font-semibold z-[100] items-center justify-center border-white w-[25px] h-[25px] border-2 absolute right-0 bottom-[35px] left-10 rounded-full text-center text-[10px] bg-primary text-black">
            {user.ITApoints}
          </span>
        </AvatarTemp>
        <div className="flex flex-col justify-center ml-6">
          <h2 className="font-bold text-black">
            {user.name} {user.surname}
          </h2>
          <p className="text-secondary font-bold text-xs mt-2">Semana week</p>
        </div>
      </div>
      <div className="flex flex-row ">
        <p>
          <span className="font-bold text-sm text-black">+55 ITAS</span>
        </p>
        <img
          className="w-5 ml-3"
          src="src/components/assets/arrow_right.svg"
          alt="search"
        />
      </div>
    </div>
  )
}

export default UserCard
