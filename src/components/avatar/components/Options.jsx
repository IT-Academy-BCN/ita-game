import React from 'react'

function Options() {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best fantasy franchise</span>
        <span className="label-text-alt">Alt label</span>
      </label>
      <select className="select select-bordered">
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </div>
  )
}

export default Options
