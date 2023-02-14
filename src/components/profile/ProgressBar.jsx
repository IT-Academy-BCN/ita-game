import { useState } from 'react'

function ProgressBar({ value }) {
  return (
    <div className="bg-gray-200 rounded-full">
      <div
        className="bg-primary rounded-full text-center text-secondary"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
}

export default ProgressBar
