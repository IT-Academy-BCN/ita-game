import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, FooterMenu, UserCard, ParticipantsModal } from '../components';
import { WeeklyResume } from '../components';
import { AuthContext } from '../store/authentication/authContext';

function Home() {
  const [isModal, setIsModal] = useState(false);
  const { state } = useContext(AuthContext);
  const { user } = state;

  return (
    <>
      <Navbar>Resumen Semanal</Navbar>
      <div className="w-full h-full bg-base pt-12 pb-12">
        <div className="flex items-start p-6">
          <h1 className="font-bold text-3xl">Hola {user.name}!</h1>
        </div>
        <div className="flex items-start ml-6">
          <p className="font-bold">Puntos ganados</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <UserCard />
        </div>
        <div className="flex items-start ml-6 mt-4">
          <p className="font-bold">Estado de la semana</p>
        </div>
        <div className="flex justify-center items-center">
          <WeeklyResume />
        </div>
        <NavLink to="/admin" className="flex justify-end mr-16 my-5">
          <p className="font-bold">Ir a admin (pruebas)</p>
        </NavLink>
        <div className="flex justify-center">
          <h4 className='flex gap-0.5'>
            Creado con <span class="material-symbols-outlined">favorite</span> 
            por
            <span
              onClick={() => setIsModal((prev) => !prev)}
              className="underline cursor-pointer ml-2"
            >
               React Team
            </span>
          </h4>
          {isModal && <ParticipantsModal setOpenModal={setIsModal} />}
        </div>
      </div>
      <FooterMenu />
    </>
  );
}

export default Home;
