import { useEffect } from 'react'
import { useContext } from 'react'
import AvatarNice, { genConfig } from 'react-nice-avatar'
import { AvatarContext } from './store/context'
import { actions } from './store/reducer'

const defaultStyle = {
  sex: 'woman',
  hairStyle: 'normal',
  hairColor: '#BA4A00',
  faceColor: '#FAD7A0',
  hatStyle: 'beanie',
  hatColor: '#F1C40F',
  eyeStyle: 'smile', // circle, oval, smile
  glassesStyle: 'round', // none, round, square
  noseStyle: 'long', //short, long, round
  shirtStyle: 'short', // hoody, short, polo
  shirtColor: '#BB8FCE',
  bgColor: '#58c914'
}

export default function AvatarContainer({ className, ...rest }) {
  const {
    state: { user },
    dispatch
  } = useContext(AvatarContext)

  const avatar = user.avatar || defaultStyle

  useEffect(() => {
    dispatch({ type: actions.SET_INITIAL_USER, payload: { avatar } })
  }, [avatar])

  const config = genConfig(avatar)

  return <AvatarNice className={className} {...config} {...rest} />
}
