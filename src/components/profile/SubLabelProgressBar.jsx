function SubLabelProgressBar({ subLabeData: { points, relativePoints } }) {
  const level = Math.ceil(points / 50)
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
          {points - level * 50}
          <span className="ml-2 text-neutral-focus font-bold text-sm">
            para subir de nivel
          </span>
        </p>
      </div>
    </div>
  )
}

export default SubLabelProgressBar
