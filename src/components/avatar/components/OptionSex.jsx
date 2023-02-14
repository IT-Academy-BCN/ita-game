import { useState } from 'react'
import { useHandler } from '../hooks'

function OptionSex() {
  const { handler } = useHandler()
  const [gender, setGender] = useState('')

  return (
    <>
      <p>
        <span className="label-text">Selected Gender: {gender}</span>
      </p>
      <div className="form-control w-16">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="woman"
            className="mr-2 radio radio-primary checked:bg-pink-300"
            checked={gender === 'woman'}
            onChange={e => {
              handler('sex')
              setGender(e.target.value)
            }}
          />
          <span className="label-text">Woman</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="man"
            className="mr-2 radio radio-primary checked:bg-blue-300"
            checked={gender === 'man'}
            onChange={e => {
              handler('sex')
              setGender(e.target.value)
            }}
          />
          <span className="label-text">Man</span>
        </label>
      </div>
    </>
  )
}

export default OptionSex
