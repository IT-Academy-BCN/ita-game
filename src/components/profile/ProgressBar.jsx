import { useState } from 'react'

export default function ProgressBar({ ITApoints, className }) {
  const [progress, setProgress] = useState(ITApoints)

  return (
    <div>
      <progress
        className={className}
        max="300"
        style={{ width: `${progress}%`, height: '1.2rem' }}
        value={ITApoints * 100}
      >
        {progress}%
      </progress>
    </div>
  )
}
