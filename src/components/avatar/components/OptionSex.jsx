import { useContext } from 'react'
import { AvatarContext } from '../store/context'
// man, woman
function OptionSex() {
  const { state, dispatch } = useContext(AvatarContext)
  
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
