import { FooterMenu, Navbar } from '../components';
import arrowDown from '../components/assets/arrow_down.svg';
import { Title } from '../components/atoms';
import avatar from '../components/assets/images/avatar.png';

const fakeAdmin = {
   users: [
      { id: 'Ona Costa', img: 'Image' },
      { id: 'Pepeee', img: 'Image' }
   ]
};

console.log(fakeAdmin.users[1].id);

const Admin = () => {
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
            <div className="card flex flex-row justify-between items-center p-2.5 my-2 mx-6 border border-stone-300 hover:border-stone-400 bg-white">
               <div className="flex flex-row">
                  <div className="avatar">
                     <div className="w-14 rounded-full bg-slate-100 px-2 py-2">
                        <img src={avatar} />
                     </div>
                  </div>
                  <div className="flex flex-col justify-center pl-2 my-1">
                     <h2 className="font-bold text-black">Ona Costa</h2>
                     <div className="flex flex-row gap-2 text-xs font-semibold text-stone-500"></div>
                  </div>
               </div>
               <div>
                  <img className="w-6" src={arrowDown} alt="Arrow down" />
               </div>
            </div>
            <FooterMenu />
         </div>
      </>
   );
};

export default Admin;
