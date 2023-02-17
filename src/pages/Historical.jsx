import { FooterMenu, Navbar } from '../components';
import place from '../assets/images/first-place.png';
import zoom from '../assets/images/zoom-dynamic-color.png';
import folder from '../assets/images/new-folder-dynamic-color.png';
import thumb from '../assets/images/thumb-up-dynamic-color.png';
import medal from '../assets/images/medal-dynamic-color.png';
import LineChart from '../components/LineChart';
import { groupByType } from '../utils/groupByType';
import { calculateITA } from '../utils/calculateITA';
import { useContext } from 'react';
import { ActivitiesContext } from '../store/activitiesContext/ActivitiesContext';
import useCurrentWeek from '../hooks/useCurrentWeek';
import { AuthContext } from '../store/authentication/authContext';

function Historical() {
  const { activities } = useContext(ActivitiesContext);
  const { user } = useContext(AuthContext)

  const currentWeekData = useCurrentWeek();
  // separa los datos de la semana actual por los tipos de actividad
  const groupedData = groupByType(currentWeekData);
  // suma el total de todas las actividad y el total por actividades separada
  const totalPerWeek = calculateITA(groupedData);

  // PUNTOS TOTAL POR ACTIVIDAD
  const totalITAS = groupByType(activities);
  const { wiki, total, explanation, doubt, revision } = calculateITA(totalITAS);

  return (
    <>
      <Navbar>Historial</Navbar>
      <div className=" pb-10 pt-16 px-5">
        <div className="flex justify-between">
          <div className="self-center">
            <h1 className="font-bold ">{user && user.user.name}</h1>
            <p className="font-bold opacity-50	text-xs">Frontend React</p>
          </div>
          <div className="flex bg-white p-2 rounded-full 	">
            <img src={place} className="mr-2 h-12 bg-slate-200 rounded-full " />
            <div className="mr-8">
              <p className="font-bold">Nivel 5</p>
              <p className="text-xs">{total} ITAS</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-bold	mb-5">Evolución de tu actividad</p>

          <div className=" card bg-white">
            <div className="card-body p-2">
              <LineChart totalPerWeek={totalPerWeek} />
            </div>
          </div>
        </div>

        <div id="puntos-ganados">
          <p className="font-bold	mb-5 mt-7">Puntos por actividad</p>
          <div className="card bg-white">
            <div className="card-body px-2 ">
              <div className="flex flex-col items-center">
                <div className=" py-1	flex flex-row items-center w-full mb-4">
                  <img src={zoom} className="h-12 mx-3" />
                  <p className="mx-4 text-left w-24 text-sm">
                    Revisiones de código
                  </p>
                  <p className="font-bold text-left text-sm">{revision} ITAS</p>
                </div>

                <div className=" py-1	flex flex-row items-center w-full mb-4">
                  <img src={folder} className="h-12 mx-3" />
                  <p className="mx-4 w-24 text-sm">Entradas en la wiki</p>
                  <p className="font-bold text-left text-sm">{wiki} ITAS</p>
                </div>

                <div className="py-1	flex flex-row items-center w-full mb-4">
                  <img src={thumb} className="h-12 mx-3" />
                  <p className="mx-4 w-24 text-sm">Dudas resueltas</p>
                  <p className="font-bold text-left text-sm">{doubt} ITAS</p>
                </div>

                <div className="py-1	flex flex-row items-center w-full mb-4">
                  <img src={medal} className="h-12 mx-3" />
                  <p className="mx-4 w-24 text-sm">Explicación a la clase</p>
                  <p className="font-bold text-left text-sm">
                    {explanation} ITAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMenu />
    </>
  );
}

export default Historical;
