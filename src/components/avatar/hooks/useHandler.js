import { useContext } from 'react'
import { AvatarContext } from '../store/context'
import { actions } from '../store/reducer'

export default function useHandler() {
  const { state, dispatch } = useContext(AvatarContext)
  const { avatar } = state.user

  const handler = propety => ({ target }) => {
    dispatch({
      type: actions.UPDATE_AVATAR,
      payload: { ...avatar, [propety]: target.value }
    })
  }
  return { handler }
}

