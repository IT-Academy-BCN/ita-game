import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { WikiContext } from '../store/wikiContext/WikiContext';
import { arrowRight } from './assets';

export default function DisplayModeWiki({ name, resource, theme }) {
  const { getStackData } = useContext(WikiContext);

  return (
    <div className="card flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300">
      <div className="flex flex-row">
        <div className="avatar">
          <div className="w-14 rounded-full px-2 py-2">
            <img
              src={import.meta.resolve(`./assets/${name}.svg`)}
              alt={`${name}-logo`}
            />
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
      <NavLink onClick={() => getStackData(name)} to={`/${name}`}>
        <img className="w-6" src={arrowRight} alt="search" />
      </NavLink>
    </div>
  );
}
