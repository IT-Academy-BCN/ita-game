import { useContext, useEffect, useState } from "react"
import { ActivitiesContext } from "../store/activitiesContext/ActivitiesContext"
import { DateTime } from "luxon"

export default function useCurrentWeek(){

const [currentWeekData, setCurrentWeekData] = useState([])
const {activities} = useContext(ActivitiesContext)


// DÍA ACTUAL TIMESTAMP EN SEGUNDOS
const weekTimestamp = Math.floor(Date.now() / 1000)

useEffect(() => {
  // convierte los milisegundos que le pasamos en un objeto DateTime
  const weekDate = DateTime.fromMillis(weekTimestamp * 1000)

  const startOfWeek = weekDate.startOf("week")
  const endOfWeek = weekDate.endOf('week');

  setCurrentWeekData(
    activities.filter((item) => {
      const timestamp = Date.parse(item.doneDate)/1000;
      const itemDate = DateTime.fromMillis(timestamp * 1000)

      return (
        // itemDate >= startOfWeek && itemDate < startOfWeek.plus({ weeks: 1 })
        itemDate >= startOfWeek && itemDate <= endOfWeek
      )
    })
  )
}, [activities, weekTimestamp])


return currentWeekData
}