import React from 'react'

function DividerSection({ data: { activities } }) {
  return (
    <div className="flex flex-col">
      <div className="divider" />
      <div className="flex justify-between">
        <p className="text-base text-black">Actividades Realizadas</p>
        <p className="text-base text-black">{activities}</p>
      </div>
      <div className="divider" />
      <div className="flex justify-between">
        <p className="text-base text-black">Fecha de alta</p>
        <p className="text-base text-black">21/12/2022</p>
      </div>
    </div>
  )
}

export default DividerSection
