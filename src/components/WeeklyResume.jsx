import React from "react"
import { IndicatorGroup } from "./molecules"
import zoom from "../assets/images/zoom-dynamic-color.png"
import folder from "../assets/images/new-folder-dynamic-color.png"
import thumb from "../assets/images/thumb-up-dynamic-color.png"
import medal from "../assets/images/medal-dynamic-color.png"

const WeeklyResume = ({ data }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 bg-white p-5 m-3 rounded-xl h-2/4 w-[90%] max-h-[400px]">
      <IndicatorGroup
        title="Revisiones de código"
        punctuation={data.revision ? `${data.revision.length} / 2` : "0 / 2"}
        points="+15"
      >
        <img src={zoom} alt="zoom" className="z-[40] h-14" />
      </IndicatorGroup>

      <IndicatorGroup
        title="Entradas en la wiki"
        punctuation={data.wiki ? `${data.wiki.length}` : "0"}
        points="+5"
      >
        <img src={folder} alt="folder" className="z-[40] h-12" />
      </IndicatorGroup>

      <IndicatorGroup
        title="Dudas resueltas"
        punctuation={data.doubt ? `${data.doubt.length} / 1` : "0 / 1"}
        points="+10"
      >
        <img src={thumb} alt="zoom" className="z-[40] h-12" />
      </IndicatorGroup>

      <IndicatorGroup
        title="Explicación a la clase"
        punctuation={data.explanation ? `${data.explanation.length}` : "0"}
        points="+30"
      >
        <img src={medal} alt="zoom" className="z-[40] h-14" />
      </IndicatorGroup>
    </div>
  )
}

export default WeeklyResume
