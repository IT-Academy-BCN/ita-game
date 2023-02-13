import React from 'react'
import { useContext } from 'react'
import { AvatarContext } from '../store/context'
import { actions } from '../store/reducer'

function OptionGlassesStyle() {
  const { state, dispatch } = useContext(AvatarContext)
  const { avatar } = state.user

  const handleChange = e => {
    dispatch({
      type: actions.UPDATE_AVATAR,
      payload: { ...avatar, glassesStyle: e.target.value }
    })
    console.log('from OptionGlasses', e.target.value )
  }

  const options = ['none', 'round', 'square']

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best glass style</span>
      </label>
      <select onChange={handleChange} className="select select-primary select-bordered" placeholder="Pick one">
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default OptionGlassesStyle
