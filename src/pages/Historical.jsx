import { FooterMenu, Navbar } from "../components"
import place from '../components/assets/first-place.png'
import zoom from '../components/assets/zoom-dynamic-color.png'
import folder from '../components/assets/new-folder-dynamic-color.svg'
import thumb from '../components/assets/thumb-up-dynamic-color.svg'
import medal from '../components/assets/medal-dynamic-color.png'
import LineChart from "../components/LineChart"
// import db from "../db.json"

function Historical() {

    
const dataByMonth = [];

// db.forEach(item => {

//   const date = new Date(item.date * 1000);
//   const month = date.getMonth();
//   const week = Math.floor(date.getDate() / 14);

//   if (!dataByMonth[month]) {
//     dataByMonth[month] = [];
//   }
//   if (!dataByMonth[month][week]) {
//     dataByMonth[month][week] = [];
//   }
//   dataByMonth[month][week].push(item);

// });



  return (
    <>
    <Navbar>Historial</Navbar>
    <div className=" py-8 px-5">
      <div className="flex justify-between">
        <div className="self-center">
          <h1 className="font-bold ">Ona Costa</h1>
          <p className="font-bold opacity-50	text-xs">Frontend React</p>
        </div>
        <div className="flex bg-white p-2 rounded-full 	">
          <img src={place} className="mr-2 h-12 bg-slate-200 rounded-full " />
          <div className="mr-8">
            <p className="font-bold">Nivel 5</p>
            <p className="text-xs">235 ITAS</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="font-bold	mb-5">Evolución de tu actividad</p>

        <div className=" card bg-white">
          <div className="card-body p-2">
            <LineChart/>
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold	mb-5 mt-7">Puntos por actividad</p>
        <div className="card bg-white">
          <div className="card-body">
            <div className="flex flex-col	">
              <div className=" py-1	 flex	">
                <img src={zoom} className="h-12" />
                <p className="w-18 mx-8">Revisiones de código</p>
                <p className="font-black	">50 ITAS</p>
              </div>

              <div className=" py-1	 flex">
                <img src={folder} className="h-12" />
                <p className="w-18 mx-8">Entradas en la wiki</p>
                <p className="font-black	">50 ITAS</p>
              </div>

              <div className="py-1	 flex ">
                <img src={thumb} className="h-12" />
                <p className="w-18 mx-8">Dudas resueltas</p>
                <p className="font-black	">50 ITAS</p>
              </div>

              <div className=" py-1	 flex	">
                <img src={medal} className="h-12" />
                <p className="w-18 mx-8">Explicación a la clase</p>
                <p className="font-black	">50 ITAS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <FooterMenu /> */}
    </>
  )
}

export default Historical
