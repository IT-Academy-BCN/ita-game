import React, { useState } from 'react';
import { Navbar } from '../components';
import zoom from '../assets/images/zoom-dynamic-color.png';
import folder from '../assets/images/new-folder-dynamic-color.png';
import thumb from '../assets/images/thumb-up-dynamic-color.png';

function Information() {
  const [selectedTab, setSelectedTab] = useState('instrucciones');

  return (
    <>
      <Navbar>Información y normativa</Navbar>
      <div className="relative pt-16 pb-16 min-h-screen w-screen">
        <div className="w-full overflow-visible ">
          <div className="flex overflow-x-scroll no-scrollbar max-w-full mt-4 ml-4 whitespace-nowrap">
            <button
              onClick={() => setSelectedTab('instrucciones')}
              className={`
    flex-1 py-2 px-4 text-center text-black rounded-full 
    ${
      selectedTab === 'instrucciones'
        ? 'bg-primary font-bold active'
        : 'bg-white'
    }
    mr-4
  `}
            >
              Instrucciones
            </button>
            <button
              onClick={() => setSelectedTab('normativa')}
              className={`
    flex-1 py-2 px-4 text-center text-black rounded-full 
    ${selectedTab === 'normativa' ? 'bg-primary font-bold active' : 'bg-white'}
    mr-4
  `}
            >
              Normativa
            </button>
            <button
              onClick={() => setSelectedTab('wiki')}
              className={`
    flex-1 py-2 px-4 text-center text-black rounded-full 
    ${selectedTab === 'wiki' ? 'bg-primary font-bold active' : 'bg-white'}
    mr-4
  `}
            >
              Wiki
            </button>
          </div>
          {selectedTab === 'instrucciones' && (
            <div>
              <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
                Instrucciones para ganar puntos
              </h1>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.1rem] right-0.5 w-24"
                  src={zoom}
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
                  src={folder}
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
                  src={thumb}
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
          {selectedTab === 'normativa' && (
            <div>
              <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
                Normativa
              </h1>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.1rem] right-0.5 w-24"
                  src={zoom}
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
                  src={folder}
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
                  src={thumb}
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
          {selectedTab === 'wiki' && (
            <div>
              <h1 className="mt-6 ml-3 p-3 text-left text-lg font-bold text-black">
                Wiki
              </h1>
              <div className="relative my-6 mx-4 flex flex-col rounded-3xl bg-white p-1">
                <img
                  className="absolute top-[-1.1rem] right-0.5 w-24"
                  src={zoom}
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
                  src={folder}
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
                  src={thumb}
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
