import React, { useState } from "react";
import { Navbar } from "../components";

function Information() {
  const [selectedTab, setSelectedTab] = useState("instrucciones");

  return (
    <div className="relative h-screen w-screen bg-gray-300">
      <Navbar>Información y normativa</Navbar>
      <div className="mt-8 w-full">
        <div className="flex border-b border-gray-500 bg-white">
          <button
            onClick={() => setSelectedTab("instrucciones")}
            className={`flex-1 py-2 px-4 text-center text-gray-700 ${
              selectedTab === "instrucciones"
                ? "bg-gray-400 font-bold"
                : "hover:bg-gray-400"
            }`}
          >
            Instrucciones
          </button>
          <button
            onClick={() => setSelectedTab("normativa")}
            className={`flex-1 py-2 px-4 text-center text-gray-700 ${
              selectedTab === "normativa"
                ? "bg-gray-400 font-bold"
                : "hover:bg-gray-400"
            }`}
          >
            Normativa
          </button>
        </div>
        {selectedTab === "instrucciones" && (
          <div>
            <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
              Instrucciones para ganar puntos
            </h1>
            <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
              <img
                className="absolute top-[-1.1rem] right-1 w-28"
                src="src/components/assets/search.svg"
                alt="search"
              />
              <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                Revisiones de código
              </h2>
              <p className="p-4 text-sm font-normal capitalize text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
              <img
                className="absolute top-[-1rem] right-3 w-20"
                src="src/components/assets/new-folder-dynamic-color.svg"
                alt="search"
              />
              <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                Colaboración en la wiki
              </h2>
              <p className="p-4 text-sm font-normal capitalize text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
              <img
                className="absolute top-[-1.7rem] right-1 w-24"
                src="src/components/assets/thumb-up-dynamic-color.svg"
                alt="search"
              />
              <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                Resolución de dudas
              </h2>
              <p className="p-4 text-sm font-normal capitalize text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        )}
        {selectedTab === "normativa" && (
          <div>
            <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
              Normativas
            </h1>
            <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
              <img
                className="absolute top-[-1.1rem] right-1 w-28"
                src="src/components/assets/search.svg"
                alt="search"
              />
              <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                Revisiones de código
              </h2>
              <p className="p-4 text-sm font-normal capitalize text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
              <img
                className="absolute top-[-1rem] right-3 w-20"
                src="src/components/assets/new-folder-dynamic-color.svg"
                alt="search"
              />
              <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                Colaboración en la wiki
              </h2>
              <p className="p-4 text-sm font-normal capitalize text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
              <img
                className="absolute top-[-1.7rem] right-1 w-24"
                src="src/components/assets/thumb-up-dynamic-color.svg"
                alt="search"
              />
              <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                Resolución de dudas
              </h2>
              <p className="p-4 text-sm font-normal capitalize text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Information;
