import { useContext } from 'react'
import { AvatarContext } from '../store/context'
import { actions } from '../store/reducer'
import OptionGlassesStyle from './OptionGlassesStyle'
import OptionHairStyle from './OptionHairStyle'
import OptionSex from './OptionSex'
import OptionShirtStyle from './OptionShirtStyle'

function Options() {
  const { state, dispatch } = useContext(AvatarContext)
  const { avatar } = state.user

  const handleChange =
    propety =>
    ({ target }) => {
      console.log({ [propety]: target.value})
      dispatch({
        type: actions.UPDATE_AVATAR,
        payload: { ...avatar, [propety]: target.value }
      })
    }

  return (
    <>
      <OptionSex />
      <OptionHairStyle handleChange={handleChange} />
      <OptionGlassesStyle />
      <OptionShirtStyle />
    </>
  )
}

export default Options
