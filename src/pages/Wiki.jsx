import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { WikiContext } from '../store/wikiContext/WikiContext';
import { FooterMenu, Navbar } from '../components';
import { Title } from '../components/atoms';
import DisplayModeWiki from '../components/DisplayModeWiki';
import folder from '../components/assets/images/new-folder-dynamic-color.png';
import arrowRight from '../components/assets/arrow_right.svg';

const Wiki = () => {
   const { categories } = useContext(WikiContext);

   return (
      <>
         <Navbar>Wiki</Navbar>
         <div className="container min-w-full flex flex-col bg-white pb-10">
            <div className="bg-slate-200  pt-20">
               <NavLink to={`/wiki/resource`}>
                  <div className="card flex  flex-row justify-between h-20 items-center my-2 mx-6 border border-stone-300 bg-white hover:border-stone-400">
                     <div className="h-full rounded-l-xl rounded-r-3xl  bg-primary w-24 mr-6">
                        <div className="flex items-center justify-start ml-4 h-full">
                           <img src={folder} alt="New folder" className="w-2/3" />
                        </div>
                     </div>
                     <div className="w-5/12 flex sm:justify-center">
                        <h2 className="font-bold text-black text-sm">¿Cómo colaborar en la wiki?</h2>
                     </div>
                     <img className="w-6 ml-12 mr-2.5" src={arrowRight} alt="search" />
                  </div>
               </NavLink>
               <div className="form-control mx-6 mt-7 -mb-5 border border-stone-300 rounded-lg">
                  <div className="input-group flex justify-center">
                     <input type="text" placeholder="¿Buscas un tema?" className="input input-bordered w-full" />
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
            </div>

            <div className="mx-7 mt-10 mb-0">
               <Title>Categorías</Title>
            </div>
            {categories.map((c) => (
               <DisplayModeWiki key={c.id} name={c.stack} resource={c.resource} theme={c.theme} />
            ))}
            <FooterMenu />
         </div>
      </>
   );
};

export default Wiki;
