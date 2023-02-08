import React from "react"
import { IndicatorGroup } from "./molecules"
import magnifier from "./assets/images/zoom-dynamic-color.png"
import folder from "./assets/images/new-folder-dynamic-color.png"
import thumb from "./assets/images/thumb-up-dynamic-color.png"
import medal from "./assets/images/medal-dynamic-color.png"

const WeeklyResume = () => {
  const fakeActivities = [
    {
      codeRevision: "1 / 1",
      wiki: "2",
      doubtsSolved: "1 / 2",
      class: "1",
    },
  ]

  return (
    <div className="grid grid-rows-2 grid-cols-2 bg-white p-5 m-3 rounded-xl h-2/4 w-[90%] max-h-[400px]">
      {fakeActivities.map((item) => (
        <IndicatorGroup
          title="Revisiones de código"
          punctuation={item.codeRevision}
          points="+15"
        >
          <img src={magnifier} alt="zoom" className="z-[100] h-14" />
        </IndicatorGroup>
      ))}

      {fakeActivities.map((item) => (
        <IndicatorGroup
          title="Entradas en la wiki"
          punctuation={item.wiki}
          points="+5"
        >
          <img src={folder} alt="folder" className="z-[100] h-12" />
        </IndicatorGroup>
      ))}

      {fakeActivities.map((item) => (
        <IndicatorGroup
          title="Dudas resueltas"
          punctuation={item.doubtsSolved}
          points="+10"
        >
          <img src={thumb} alt="zoom" className="z-[100] h-12" />
        </IndicatorGroup>
      ))}

      {fakeActivities.map((item) => (
        <IndicatorGroup
          title="Explicación a la clase"
          punctuation={item.class}
          points="+30"
        >
          <img src={medal} alt="zoom" className="z-[100] h-14" />
        </IndicatorGroup>
      ))}
    </div>
  )
}

export default WeeklyResume
