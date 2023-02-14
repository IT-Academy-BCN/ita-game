import { forwardRef, useRef, useState } from 'react';
import { FooterMenu, Navbar } from '../components';
import arrowDown from '../components/assets/arrow_down.svg';
import { Title } from '../components/atoms';
import avatar from '../components/assets/images/avatar.png';
import thumbUp from '../components/assets/images/thumb-up-dynamic-color.png';
import calender from '../components/assets/images/calender-dynamic-color.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const fakeAdmin = [
   { id: 'Ona Costa', img: avatar },
   { id: 'Duda Resuelta', img: thumbUp }
   // { id: 'Hoy', img: calender }
];

const Admin = () => {
   const [startDate, setStartDate] = useState(new Date());
   console.log('startDate', startDate);
   const hiddenBrowseButton = useRef(null);

   const CalenderInput = forwardRef(({ onClick }, ref) => (
      <div
         className="card flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300 hover:border-stone-400 bg-white"
         onClick={onClick}
         ref={ref}
      >
         <div className="flex flex-row">
            <div className="avatar">
               <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                  <img src={calender} alt="calender" />
               </div>
            </div>
            <div className="flex flex-col justify-center pl-2 my-1">
               <h2 className="font-bold text-black">Hoy</h2>
            </div>
         </div>
         <div>
            <img className="w-6" src={arrowDown} alt="Arrow down" />
         </div>
      </div>
   ));

   return (
      <>
         <Navbar>Competición</Navbar>
         <div className="container min-w-full flex flex-col bg-slate-100 pb-10">
            <div className="mx-7 mt-20 mb-0">
               <h1 className="text-3xl font-bold text-black">¡Hola Manoli!</h1>
            </div>
            <div className="mx-7 mt-10 mb-0">
               <Title>Añadir nueva actividad</Title>
            </div>
            {/*  */}
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
            <DatePicker
               // portalId="root-portal"
               selected={startDate}
               onChange={(date) => setStartDate(date)}
               customInput={<CalenderInput />}
               dateFormat="yyyy-MM-dd"
            />
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
