import React from 'react'

function OptionGlassesStyle() {
  const options = ['none', 'round', 'square']
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best glass style</span>
      </label>
      <select className="select select-bordered" placeholder="Pick one">
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default OptionGlassesStyle
