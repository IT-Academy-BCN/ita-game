import { useState } from 'react'

function ProgressBar({ value }) {
  const nextMultiple = Math.ceil(value / 50) * 50
  return (
    <div>
      <progress
        className="progress progress-primary bg-slate-200" 
        // style={{ width: `${value}%` }}
        value={(value * 100) / nextMultiple}
        max={100}
      >
        {value}%
      </progress>
    </div>
  )
}

export default ProgressBar
