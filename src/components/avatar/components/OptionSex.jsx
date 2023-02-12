import { useState } from 'react'
import { useContext } from 'react'
import { AvatarContext } from '../store/context'
import { actions } from '../store/reducer'
// man, woman
function OptionSex() {
  const { state, dispatch } = useContext(AvatarContext)
  const {
    user: { avatar }
  } = state

  const [gender, setGender] = useState('')

  const handleChange = e => {
    dispatch({
      type: actions.UPDATE_AVATAR,
      payload: { ...avatar, sex: e.target.value }
    })
    setGender(e.target.value)
  }

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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <span className="label-text">Man</span>
        </label>
      </div>
    </>
  )
}

export default OptionSex
