const DropdownType = ({ info, setSelected, selected }) => {
   return (
      <>
         <input type="checkbox" id="my-modal3" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box h-96">
               <div className="flex flex-col gap-1">
                  <div className="modal-action">
                     <label htmlFor="my-modal3" className="btn">
                        X
                     </label>
                  </div>
                  <ul className="dropdown-content  bg-transparent rounded-box w-full">
                     {info?.map((c) => (
                        <label htmlFor="my-modal3">
                           <li
                              className="card flex flex-row justify-between items-center p-2 my-1 mx-2 bg-stone-100 hover:bg-slate-200 cursor-pointer"
                              key={c.id}
                              onClick={() => {
                                 setSelected(c);
                              }}
                           >
                              <div className="flex flex-row">
                                 <div className="avatar">
                                    <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                                       <img src={c.img} alt={`${c.name}-logo`} />
                                    </div>
                                 </div>
                                 <div className="flex flex-col justify-center pl-2 my-1">
                                    <h2 className="font-bold text-black">
                                       {c.name.slice(0, 1).toUpperCase() + c.name.slice(1)}
                                    </h2>
                                 </div>
                              </div>
                           </li>
                        </label>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default DropdownType;
