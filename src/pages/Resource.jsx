import React from "react"
import { Navbar, FooterMenu, ResourcesCard } from "../components"

const Resource = () => {
  return (
    <>
      <div className="relative w-screen flex flex-col  h-screen bg-base">
        <Navbar>Wiki</Navbar>
        <div className="flex flex-col items-start p-1">
          <label className="font-bold mt-5 mb-3 ml-6">Filtros</label>
          <select className="select w-[90%] self-center">
            <option>Context API</option>
            <option>Hooks</option>
            <option>useState</option>
          </select>
        </div>
        <div className=" flex flex-col items-center">
          <div className="flex flex-row bg-white w-[90%] rounded-lg justify-between p-2 my-3 border-solid border-[1px] border-secondary">
            <button className="bg-transparent border-[1px] border-secondary text-secondary px-4 py-3  font-bold rounded-lg hover:bg-primary hover:border-primary hover:text-black">
              Vídeos
            </button>
            <button className="bg-transparent border-[1px] border-secondary text-secondary px-4 py-3 font-bold rounded-lg hover:bg-primary hover:border-primary hover:text-black">
              Tutoriales
            </button>
            <button className="bg-transparent border-[1px] border-secondary text-secondary px-4 py-3 font-bold rounded-lg hover:bg-primary hover:border-primary hover:text-black">
              Blogs
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <ResourcesCard />
        </div>
      </div>
      <FooterMenu />
    </>
  )
}

export default Resource
