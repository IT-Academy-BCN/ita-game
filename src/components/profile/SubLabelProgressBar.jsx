function SubLabelProgressBar({ subLabeData: { points, multiple } }) {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center">
        <p className="font-bold text-black text-sm">{points} ITAS</p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-black text-sm">{multiple - points}</p>

        <p className="text-neutral-focus font-bold text-sm">
          para subir de nivel
        </p>
      </div>
    </div>
  )
}

export default SubLabelProgressBar
