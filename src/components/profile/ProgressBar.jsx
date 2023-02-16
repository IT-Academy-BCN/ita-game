function ProgressBar({ data: { points } }) {
  const level = Math.ceil(points / 50)
  return (
    <div>
      <p className="uppercase font-bold">Nivel {level}</p>

      <progress
        className="progress progress-primary bg-slate-200"
        value={(points % 50) * 2}
        max={100}
      >
        {points}%
      </progress>
    </div>
  )
}

export default ProgressBar
