function SubLabelProgressBar({ subLabeData: { points, multiple } }) {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center">
        <p className="font-bold text-black text-sm">
          {points}
          <span className="ml-2 text-neutral-focus font-bold text-sm">
            ITAS
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-black text-sm">
          {multiple - points}
          <span className="ml-2 text-neutral-focus font-bold text-sm">
            para subir de nivel
          </span>
        </p>
      </div>
    </div>
  )
}

export default SubLabelProgressBar
