import React from 'react'
// man, woman
function OptionSex() {
  return (
    <>
      <label className="label">
        <span className="label-text">woman/man</span>
      </label>
      <input
        type="radio"
        name="radio-1"
        className="mr-2 radio radio-primary"
        defaultChecked
      />
      <input type="radio" name="radio-1" className="radio radio-primary" />
    </>
  )
}

export default OptionSex
