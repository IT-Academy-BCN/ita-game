import arrowDown from '../assets/arrow_down.svg';

const DropdownAdmin = ({ info, selected, setSelected, children, id }) => {
   const handleClick = () => {
      const elem = document.activeElement;
      if (elem) {
         elem?.blur();
      }
   };

   return (
      <div
         className="card dropdown dropdown-bottom cursor-pointer flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
         tabIndex={0}
      >
         <div className="flex flex-row">
            <div className="avatar">
               <div className="w-14 rounded-full px-2 py-2">
                  {/* {id === 'user' && (
                     <img
                        src={import.meta.resolve(`../assets/images/${selected ? selected.stack : 'angular'}.png`)}
                        alt="Angular logo"
                     />
                  )} */}
                  {id === 'user' ? (
                     <img src={import.meta.resolve(`../assets/images/avatar.png`)} alt="Avatar logo" />
                  ) : id === 'stack' ? (
                     <img
                        src={import.meta.resolve(`../assets/images/${selected ? selected.name : 'angular'}.png`)}
                        alt="Angular logo"
                     />
                  ) : (
                     <img
                        src={import.meta.resolve(`../assets/images/${selected ? selected.name : 'angular'}.png`)}
                        alt="Angular logo"
                     />
                  )}
               </div>
            </div>
            <div className="flex flex-col justify-center pl-2 my-1">
               <h2 className="font-bold text-black">{selected ? selected.name : children}</h2>
            </div>
         </div>
         <div>
            <img className="w-6" src={arrowDown} alt="Arrow down" />
         </div>
         <ul tabIndex={0} className="dropdown-content  bg-transparent rounded-box w-full">
            {info?.map((c) => (
               <li
                  className="card flex flex-row justify-between items-center p-2 my-1 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
                  key={c.id}
                  value={c.id}
                  onClick={() => {
                     handleClick();
                     setSelected(c);
                  }}
               >
                  <div className="flex flex-row">
                     <div className="avatar">
                        <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                           <img src={import.meta.resolve(`../assets/images/${c.name}.png`)} alt={`${c.stack}-logo`} />
                        </div>
                     </div>
                     <div className="flex flex-col justify-center pl-2 my-1">
                        {/* <h2 className="font-bold text-black">{c.stack.slice(0, 1).toUpperCase() + c.stack.slice(1)}</h2> */}
                        <h2 className="font-bold text-black">{c.name}</h2>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default DropdownAdmin;
