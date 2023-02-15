import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FooterMenu, Navbar } from '../components';
import arrowDown from '../assets/arrow_down.svg';
import { Title } from '../components/atoms';
import thumbUp from '../assets/images/thumb-up-dynamic-color.png';
import Calender from '../components/Calender';
import { WikiContext } from '../store/wikiContext/WikiContext';

const fakeAdmin = [
   // { id: 'Ona Costa', img: avatar },
   { id: 'Duda Resuelta', img: thumbUp }
];

const URL_USERS = 'https://itacademy.onrender.com/api/users';
const token =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5ZDA1OGIwNGNiNjAwNDE3YWJjYWUiLCJpYXQiOjE2NzY0NjA4MDJ9.K8XxxIIqilV3Z39zEjlTzXOwlHSLz-4kQbmToiZWLQs';
const options = {
   headers: {
      Authorization: `Bearer ${token}`
   }
};

const Admin = () => {
   const { categories } = useContext(WikiContext);
   console.log('categories', categories);
   const [users, setUsers] = useState([]);
   const [startDate, setStartDate] = useState(new Date());
   // console.log('startDate', typeof startDate.toISOString());
   const hiddenBrowseButton = useRef(null);

   useEffect(() => {
      const getUsers = async () => {
         try {
            const response = await axios.get(URL_USERS);
            if (response.status === 200) {
               const { data } = response;
               setUsers(data);
            }
         } catch (error) {
            console.error(error);
         }
      };
      getUsers();
   }, []);

   const handleClick = () => {
      const elem = document.activeElement;
      if (elem) {
         elem?.blur();
      }
   };

   return (
      <>
         <Navbar>Home (Admin)</Navbar>
         <div className="container min-w-full flex flex-col bg-slate-100 pb-10">
            <div className="mx-7 mt-20 mb-0">
               <h1 className="text-3xl font-bold text-black">¡Hola Manoli!</h1>
               {/* <h1 className="text-3xl font-bold text-black">¡Hola {currentUser.name}!</h1> */}
            </div>
            <div className="mx-7 mt-10 mb-0">
               <Title>Añadir nueva actividad</Title>
            </div>
            {/*  */}
            <div className="dropdown">
               <label tabIndex={0} className="btn m-1">
                  Click
               </label>
               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li onClick={handleClick}>
                     <a>Item 1</a>
                  </li>
                  <li onClick={handleClick}>
                     <a>Item 2</a>
                  </li>
               </ul>
            </div>
            {/* DROPDOWN TYPES */}
            <div
               className="card dropdown dropdown-bottom cursor-pointer flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
               tabIndex={0}
            >
               <div className="flex flex-row">
                  <div className="avatar">
                     <div className="w-14 rounded-full px-2 py-2">
                        <img src={import.meta.resolve(`../assets/images/angular.png`)} alt="Angular logo" />
                     </div>
                  </div>
                  <div className="flex flex-col justify-center pl-2 my-1">
                     <h2 className="font-bold text-black">Angular</h2>
                  </div>
               </div>
               <div>
                  <img className="w-6" src={arrowDown} alt="Arrow down" />
               </div>
               <ul tabIndex={0} className="dropdown-content  bg-transparent rounded-box w-full">
                  {categories.map((c) => (
                     <li
                        className="card flex flex-row justify-between items-center p-2 my-1 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
                        key={c.id}
                        value={c.id}
                        onClick={handleClick}
                     >
                        <div className="flex flex-row">
                           <div className="avatar">
                              <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                                 <img
                                    src={import.meta.resolve(`../assets/images/${c.stack}.png`)}
                                    alt={`${c.stack}-logo`}
                                 />
                              </div>
                           </div>
                           <div className="flex flex-col justify-center pl-2 my-1">
                              <h2 className="font-bold text-black">
                                 {c.stack.slice(0, 1).toUpperCase() + c.stack.slice(1)}
                              </h2>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            {/* DROPDOWN USERS */}
            <div
               className="card dropdown dropdown-bottom cursor-pointer flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300 hover:border-stone-400 bg-white "
               tabIndex={0}
            >
               <div className="flex flex-row">
                  <div className="avatar">
                     <div className="w-14 rounded-full px-2 py-2">
                        <img src={import.meta.resolve(`../assets/images/avatar.png`)} alt="Angular logo" />
                     </div>
                  </div>
                  <div className="flex flex-col justify-center pl-2 my-1">
                     <h2 className="font-bold text-black">Ona Costa</h2>
                  </div>
               </div>
               <div>
                  <img className="w-6" src={arrowDown} alt="Arrow down" />
               </div>
               <ul tabIndex={0} className="dropdown-content  bg-transparent rounded-box w-full">
                  {users.map((u) => (
                     <li
                        className="card flex flex-row justify-between items-center p-2 my-1 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
                        key={u._id}
                        value={u._id}
                        onClick={handleClick}
                     >
                        <div className="flex flex-row">
                           <div className="avatar">
                              <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                                 <img src={import.meta.resolve(`../assets/images/avatar.png`)} alt={`avatar-logo`} />
                              </div>
                           </div>
                           <div className="flex flex-col justify-center pl-2 my-1">
                              <h2 className="font-bold text-black">
                                 {u.name.slice(0, 1).toUpperCase() + u.name.slice(1)}
                              </h2>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            {/* DROPDOWN ACTIVITIES */}
            {fakeAdmin.map((f) => {
               return (
                  <div
                     className="card flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
                     key={f.id}
                  >
                     <div className="flex flex-row">
                        <div className="avatar">
                           <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                              <img src={f.img} alt={`Logo ${f.id}`} />
                           </div>
                        </div>
                        <div className="flex flex-col justify-center pl-2 my-1">
                           <h2 className="font-bold text-black">{f.id}</h2>
                        </div>
                     </div>
                     <div>
                        <img className="w-6" src={arrowDown} alt="Arrow down" />
                     </div>
                  </div>
               );
            })}
            {/* CALENDER */}
            <Calender startDate={startDate} setStartDate={setStartDate} />
            <div className="flex justify-center mb-3">
               <button type="submit" className="btn  btn-primary mt-6 w-80 px-16">
                  <span className="text-gray-900">Enviar</span>
               </button>
            </div>
            <div className="flex justify-center mb-10">
               <input ref={hiddenBrowseButton} type="file" className="hidden" />
               <button onClick={() => hiddenBrowseButton.current.click()} className="font-bold underline">
                  Cargar Excel de actividades
               </button>
            </div>
            <FooterMenu />
         </div>
      </>
   );
};

export default Admin;
