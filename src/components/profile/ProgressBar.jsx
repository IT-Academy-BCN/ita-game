function ProgressBar({ data:{points} }) {
  const nextMultiple = Math.ceil(points / 50) * 50
  return (
    <div>
      <progress
        className="progress progress-primary bg-slate-200" 
        value={(points * 100) / nextMultiple}
        max={100}
      >
        {points}%
      </progress>
    </div>
  )
}

export default ProgressBar
