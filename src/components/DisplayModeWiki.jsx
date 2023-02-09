import { NavLink } from 'react-router-dom';

export default function DisplayModeWiki({ name, resource, theme, image }) {
   return (
      <div className="card flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300">
         <div className="flex flex-row">
            <div className="avatar">
               <div className="w-14 rounded-full px-2 py-2">
                  <img src={image} alt={name} />
               </div>
            </div>
            <div className="flex flex-col justify-around pl-2 my-1">
               <h2 className="font-bold text-black">{name}</h2>
               <div className="flex flex-row gap-2 text-xs font-semibold text-stone-500">
                  <p>{resource} Recursos</p>
                  <p>-</p>
                  <p>{theme} Temas</p>
               </div>
            </div>
         </div>
         <NavLink>
            <img className="w-6" src="src/components/assets/arrow_right.svg" alt="search" />
         </NavLink>
      </div>
   );
}
