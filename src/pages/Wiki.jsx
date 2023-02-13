import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { WikiContext } from '../store/wikiContext/WikiContext';
import { FooterMenu, Navbar } from '../components';
import { Title } from '../components/atoms';
import DisplayModeWiki from '../components/DisplayModeWiki';
import folder from '../components/assets/images/new-folder-dynamic-color.png';
import arrowRight from '../components/assets/arrow_right.svg';

const Wiki = () => {
  const { categories, getStackData } = useContext(WikiContext);
  return (
    <>
      <div className="container min-w-full flex flex-col bg-white pb-10">
        <Navbar>Wiki</Navbar>
        <div className="card flex flex-row justify-around items-center p-2.5 my-2 mx-6 border border-stone-300">
          <div className="flex flex-row">
            <div className="avatar">
              <div className="w-14 rounded-full px-2 py-2">
                {/* <img src={image} alt={n} /> */}
              </div>
            </div>
            <div className="mx-7 mt-10 mb-0">
              <Title>Categorías</Title>
            </div>
          </div>
          <NavLink>
            <img className="w-6" src={arrowRight} alt="search" />
          </NavLink>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p className="flex items-center font-bold m-7 text-black ">
            Categorías
          </p>
          <button className="bg-primary hover:bg-secondary m-7 text-black font-bold  rounded-xl px-2 h-11">
            + Nuevo recurso
          </button>
        </div>
        {categories.map((c) => (
          <NavLink
            to="/wiki/resource"
            key={c.id}
            onClick={() => {
              getStackData(c.stack);
            }}
          >
            <DisplayModeWiki
              name={c.stack}
              resource={c.resource}
              theme={c.theme}
            />
          </NavLink>
        ))}
      </div>
      <FooterMenu />
    </>
  );
};

export default Wiki;
