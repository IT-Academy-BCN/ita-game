import { useContext, useEffect } from 'react'
import AvatarProvider, { AvatarContext } from './store/context'
import AvatarNice, { genConfig } from 'react-nice-avatar'
import { actions } from './store/reducer'

export function AvatarContainer({ className, ...rest }) {
  const { state, dispatch } = useContext(AvatarContext)
  const { avatar } = state.user
  console.log('Avatar', avatar.hairStyle)
  const config = genConfig(avatar)

  useEffect(() => {
    dispatch({ type: actions.UPDATE_AVATAR, payload: { ...avatar } })
  }, [])

  return <AvatarNice className={className} {...config} {...rest} />
}

export default function Avatar({ className = 'w-32 h-32', ...rest }) {
  return (
    <AvatarProvider>
      <AvatarContainer className={className} {...rest} />
    </AvatarProvider>
  )
}
