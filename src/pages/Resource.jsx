import { useState } from 'react';
import { Navbar, FooterMenu, ResourcesCard } from '../components';
import NewResource from '../components/organisms/NewResource';

const Resource = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      {isModal && <NewResource setIsModal={setIsModal} />}
      <Navbar>Wiki</Navbar>
      <div className="relative pt-10 w-screen flex flex-col h-screen bg-base">
        <div className="flex flex-row justify-between p-5 mt-5">
          <h1 className="font-bold text-xl">Recursos React.js</h1>
          <button
            type="button"
            onClick={() => setIsModal((prev) => !prev)}
            className="btn btn-circle bg-primary border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start p-1">
          <label className="font-bold  mb-3 ml-6">Temas</label>
          <select className="select w-[90%] self-center">
            <option>Context API</option>
            <option>Hooks</option>
            <option>useState</option>
          </select>
        </div>
        <div className=" flex flex-col items-center">
          <div className="flex flex-row w-[90%] justify-between p-2 my-3 ">
            <button className="bg-white  text-secondary px-4 py-3  rounded-lg hover:bg-primary hover:border-primary hover:text-black">
              Vídeos
            </button>
            <button className="bg-white  text-secondary px-4 py-3 rounded-lg hover:bg-primary hover:border-primary hover:text-black">
              Tutoriales
            </button>
            <button className="bg-white text-secondary px-4 py-3 rounded-lg hover:bg-primary hover:border-primary hover:text-black">
              Blogs
            </button>
          </div>
        </div>
        <div className="bg-white pb-3">
          <div className="flex flex-row justify-between px-4 py-8">
            <p className="font-bold">23 resultados</p>
            {/* AQUÍ IRÁ EL FILTRO */}
            <div className="flex flex-row">
              <p className="mx-4">Votos</p>
              <p className="mx-4">Fecha</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
          </div>
        </div>
        <FooterMenu />
      </div>
    </>
  );
};

export default Resource;
