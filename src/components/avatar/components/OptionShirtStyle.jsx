import { useContext } from 'react'
import { AvatarContext } from '../store/context'
import { actions } from '../store/reducer'

export default function OptionShirtStyle() {
  const { state, dispatch } = useContext(AvatarContext)
  const { avatar } = state.user

  const handleChange = ({ target }) =>
    dispatch({
      type: actions.UPDATE_AVATAR,
      payload: { ...avatar, shirtStyle: target.value }
    })

  const options = ['hoody', 'short', 'polo']

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick your SHIRT Style</span>
      </label>
      <select
        onChange={handleChange}
        className="select select-primary select-bordered"
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
