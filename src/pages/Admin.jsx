import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { DropDown, FooterMenu, Navbar } from '../components';
import arrowDown from '../assets/arrow_down.svg';
import Calender from '../components/Calender';
import useUsers from '../hooks/useUsers';
import zoom from '../assets/images/zoom-dynamic-color.png';
import folder from '../assets/images/new-folder-dynamic-color.png';
import thumb from '../assets/images/thumb-up-dynamic-color.png';
import medal from '../assets/images/medal-dynamic-color.png';
import Swal from 'sweetalert2';

const URL_USERS = 'https://itacademy.onrender.com/api/users';
const token =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5ZDEzOWIwNGNiNjAwNDE3YWJjYjAiLCJpYXQiOjE2NzY1Mjc1NjB9.ruhJ15DHlKeqeXT1EqO-v6BITS_eAZECFGKDfK6YHig';
const options = {
   headers: {
      Authorization: `Bearer ${token}`
   }
};

// Pongo 'name' para homogeneizar con users (refactor)
const categories = [
   { id: 1, name: 'React', img: 'React' },
   { id: 2, name: 'Vue', img: 'Vue' },
   { id: 3, name: 'Angular', img: 'Angular' },
   { id: 4, name: 'Javascript', img: 'Javascript' },
   { id: 5, name: 'Datascience', img: 'Datascience' }
];

const activities = [
   { id: 1, type: 'doubt', name: 'duda resuelta', img: thumb },
   { id: 2, type: 'wiki', name: 'entrada a la wiki', img: folder },
   { id: 3, type: 'explanation', name: 'explicación a la clase', img: medal },
   { id: 4, type: 'revision', name: 'revisión de código', img: zoom }
];

const Admin = () => {
   const users = useUsers(URL_USERS);
   const hiddenBrowseButton = useRef(null);
   const [message, setMessage] = useState('');

   const [selectedStack, setSelectedStack] = useState(null);
   const [selectedUser, setSelectedUser] = useState(null);
   const [selectedActivity, setSelectedActivity] = useState(null);
   const [startDate, setStartDate] = useState(new Date());

   const [data, setData] = useState();

   const byStack = (u) => u.type?.toLowerCase() === selectedStack?.name.toLowerCase();

   useEffect(() => {
      if (selectedActivity) {
         const newData = {
            type: selectedActivity.type,
            date: startDate?.toISOString()
         };
         setData(newData);
      }
   }, [selectedStack, selectedUser, selectedActivity, startDate]);

   const handleClick = () => {
      const elem = document.activeElement;
      if (elem) {
         elem?.blur();
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (selectedUser && selectedUser._id) {
         axios
            .post(`https://itacademy.onrender.com/api/activity/new/${selectedUser._id}`, data, options)
            .then((response) => {
               if (response.status === 200) {
                  Swal.fire({
                     position: 'center',
                     icon: 'success',
                     title: 'Datos enviados correctamente',
                     showConfirmButton: false,
                     timer: 2500
                  });
               }
            })
            .catch((error) => {
               console.error(error);
            });
      }
      console.log('FALTAN DATOS');
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
               <h1>Añadir nueva actividad</h1>
            </div>
            {/*  */}
            <DropDown info={categories} selected={selectedStack} setSelected={setSelectedStack} id="stack">
               Categoría
            </DropDown>
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
                     <h2 className="font-bold text-black">
                        {selectedUser
                           ? `${selectedUser.name.slice(0, 1).toUpperCase() + selectedUser.name.slice(1)}`
                           : 'Alumno'}
                     </h2>
                  </div>
               </div>
               <div>
                  <img className="w-6" src={arrowDown} alt="Arrow down" />
               </div>
               <ul tabIndex={0} className="dropdown-content  bg-transparent rounded-box w-full">
                  {users.filter(byStack).map((u) => (
                     <li
                        className="card flex flex-row justify-between items-center p-2 my-1 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
                        key={u._id}
                        value={u._id}
                        onClick={() => {
                           handleClick();
                           setSelectedUser(u);
                        }}
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
            <div
               className="card dropdown dropdown-bottom cursor-pointer flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
               tabIndex={0}
            >
               <div className="flex flex-row">
                  <div className="avatar">
                     <div className="w-14 rounded-full px-2 py-2">
                        <img src={selectedActivity ? selectedActivity.img : thumb} alt={`Logo actividad`} />
                     </div>
                  </div>
                  <div className="flex flex-col justify-center pl-2 my-1">
                     <h2 className="font-bold text-black">
                        {selectedActivity
                           ? `${selectedActivity.name.slice(0, 1).toUpperCase() + selectedActivity.name.slice(1)}`
                           : 'Actividad'}
                     </h2>
                  </div>
               </div>
               <div>
                  <img className="w-6" src={arrowDown} alt="Arrow down" />
               </div>
               <ul tabIndex={0} className="dropdown-content  bg-transparent rounded-box w-full">
                  {activities.map((a) => (
                     <li
                        className="card flex flex-row justify-between items-center p-2 my-1 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
                        key={a.id}
                        // value={a.id}
                        onClick={() => {
                           handleClick();
                           setSelectedActivity(a);
                        }}
                     >
                        <div className="flex flex-row">
                           <div className="avatar">
                              <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                                 <img src={a.img} alt={`${a.name}-logo`} />
                              </div>
                           </div>
                           <div className="flex flex-col justify-center pl-2 my-1">
                              <h2 className="font-bold text-black">
                                 {a.name.slice(0, 1).toUpperCase() + a.name.slice(1)}
                              </h2>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            {/* CALENDER */}
            <Calender startDate={startDate} setStartDate={setStartDate} />
            <div className="text-center mt-4 mb-0 font-bold text-green-600">
               <p>{message}</p>
            </div>
            <div className="flex justify-center mb-3">
               <button type="submit" className="btn  btn-primary mt-3 w-80 px-16" onClick={handleSubmit}>
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
