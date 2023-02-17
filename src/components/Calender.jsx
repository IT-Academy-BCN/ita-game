import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import calender from '../assets/images/calender-dynamic-color.png';
import arrowDown from '../assets/arrow_down.svg';

import 'react-datepicker/dist/react-datepicker.css';

const Calender = ({ startDate, setStartDate }) => {
   const date = new Date();
   const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().substr(-2)}`;

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
               {/* <h2 className="font-bold text-black">{startDate ? formattedDate : "Fecha"}</h2> */}
               <h2 className="font-bold text-black">{startDate ? startDate.toISOString().split('T')[0] : 'Fecha'}</h2>
            </div>
         </div>
         <div>
            <img className="w-6" src={arrowDown} alt="Arrow down" />
         </div>
      </div>
   ));

   return (
      <DatePicker
         selected={date}
         onChange={(date) => setStartDate(date)}
         customInput={<CalenderInput />}
         dateFormat="MMMM d, yyyy h:mm aa"
         popperPlacement="bottom"
         calendarClassName="bg-primary"
      />
   );
};

export default Calender;
