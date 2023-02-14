import React, { useState } from "react";
import { Navbar } from "../components";

function Information() {
  const [selectedTab, setSelectedTab] = useState("instrucciones");

  return (
    <>
      <Navbar>Información y normativa</Navbar>
      <div className="relative pt-16 min-h-screen w-screen bg-gray-200">
        <div className="w-full">
          <div className="flex overflow-x-hidden max-w-full mt-4 ml-4">
            <button
              onClick={() => setSelectedTab("instrucciones")}
              className={`flex-1 py-2 px-4 text-center text-black bg-white rounded-full ${
                selectedTab === "instrucciones"
                  ? "bg-primary font-bold active"
                  : "hover:border-stone-400"
              } mr-4`}
            >
              Instrucciones
            </button>
            <button
              onClick={() => setSelectedTab("normativa")}
              className={`flex-1 py-2 px-4 text-center text-black  bg-white rounded-full ${
                selectedTab === "normativa"
                  ? "bg-primary font-bold active"
                  : "hover:border-stone-400"
              } mr-4`}
            >
              Normativa
            </button>
            <button
              onClick={() => setSelectedTab("wiki")}
              className={`flex-1 py-2 px-4 text-center text-black  bg-white rounded-full ${
                selectedTab === "wiki"
                  ? "bg-primary font-bold active"
                  : "hover:border-stone-400"
              }`}
            >
              Wiki
            </button>
          </div>

          {selectedTab === "instrucciones" && (
            <div>
              <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
                Instrucciones para ganar puntos
              </h1>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.1rem] right-0.5 w-24"
                  src="src/components/assets/images/zoom-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Revisiones de código
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-0.75rem] right-3 w-16"
                  src="src/components/assets/images/new-folder-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Colaboración en la wiki
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.5rem] right-2 w-20"
                  src="src/components/assets/images/thumb-up-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Resolución de dudas
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          )}
          {selectedTab === "normativa" && (
            <div>
              <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
                Normativa
              </h1>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.1rem] right-0.5 w-24"
                  src="src/components/assets/images/zoom-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Revisiones de código
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-0.75rem] right-3 w-16"
                  src="src/components/assets/images/new-folder-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Colaboración en la wiki
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.5rem] right-2 w-20"
                  src="src/components/assets/images/thumb-up-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Resolución de dudas
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          )}
          {selectedTab === "wiki" && (
            <div>
              <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
                Wiki
              </h1>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.1rem] right-0.5 w-24"
                  src="src/components/assets/images/zoom-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Revisiones de código
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-0.75rem] right-3 w-16"
                  src="src/components/assets/images/new-folder-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Colaboración en la wiki
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.5rem] right-2 w-20"
                  src="src/components/assets/images/thumb-up-dynamic-color.png"
                  alt="search"
                />
                <h2 className="mt-6 ml-1 p-3 text-xl font-bold leading-tight text-black">
                  Resolución de dudas
                </h2>
                <p className="p-4 text-sm font-normal capitalize text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Information;
