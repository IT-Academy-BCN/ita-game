import { FooterMenu, Navbar } from "../components"
import place from "../components/assets/images/first-place.png"
import zoom from "../components/assets/images/zoom-dynamic-color.png"
import folder from "../components/assets/new-folder-dynamic-color.svg"
import thumb from "../components/assets/thumb-up-dynamic-color.svg"
import medal from "../components/assets/images/medal-dynamic-color.png"
import LineChart from "../components/LineChart"
import { useEffect, useState } from "react"
import { DateTime } from "luxon"
import { groupByType } from "../utils/groupByType"
import { calculateITA } from "../utils/calculateITA"
import axios from "axios"
import { useContext } from "react"
import { ActivitiesContext } from "../store/activitiesContext/ActivitiesContext"



const data = [
  { date: 1672847739, type: "wiki" },
  { date: 1675256878, type: "doubt" },
  { date: 1672758090, type: "wiki" },
  { date: 1674481469, type: "explanation" },
  { date: 1675259859, type: "revision" },
  { date: 1674570788, type: "wiki" },
  { date: 1675439257, type: "doubt" },
  { date: 1674661229, type: "wiki" },
  { date: 1674053351, type: "explanation" },
  { date: 1674737388, type: "revision" },
  { date: 1675772169, type: "wiki" },
  { date: 1675692582, type: "doubt" },
  { date: 1675777469, type: "wiki" },
  { date: 1675779142, type: "explanation" },
  { date: 1675687676, type: "revision" },
]

function Historical() {
  const [currentWeekData, setCurrentWeekData] = useState([])
  const {activities} = useContext(ActivitiesContext)
  
  
  // DÍA ACTUAL TIMESTAMP EN SEGUNDOS
  const weekTimestamp = Math.floor(Date.now() / 1000)
  // const weekTimestamp = Math.floor(d2.getTime()/ 1000)

  useEffect(() => {
    // convierte los milisegundos que le pasamos en un objeto DateTime
    const weekDate = DateTime.fromMillis(weekTimestamp * 1000)

    // inicio semana actual
    const startOfWeek = weekDate.startOf("week")

    // se filtran los datos que están dentro del rango de fechas de la semana actual (desde el inicio de la semana hasta el final de la semana)
    setCurrentWeekData(
      data.filter((item) => {
        const itemDate = DateTime.fromMillis(item.date * 1000)
        return (
          itemDate >= startOfWeek && itemDate < startOfWeek.plus({ weeks: 1 })
        )
      })
    )
  }, [weekTimestamp])

  // separa los datos de la semana actual por los tipos de actividad
  const groupedData = groupByType(currentWeekData)

  // suma el total de todas las actividad y el total por actividades separada
  const totalPerWeek = calculateITA(groupedData)

  // PUNTOS TOTAL POR ACTIVIDAD
 

  const totalITAS = groupByType(activities)
  const { wiki, explanation, doubt, revision } = calculateITA(totalITAS)




  return (
    <>
      <Navbar>Historial</Navbar>
      <div className=" pb-10 pt-16 px-5">
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
  )
}

export default Historical
