import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AvatarContext } from './store/context'
import AvatarNice, { genConfig } from 'react-nice-avatar'
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
  const { state, dispatch } = useContext(AvatarContext)
  const { user } = state
  const { avatar } = user //|| defaultStyle

  console.log('desde AvatarContainer', avatar.hairStyle)

  const [config, setConfig] = useState(genConfig(avatar))

  useEffect(() => {
    dispatch({type: actions.UPDATE_AVATAR, payload:{...avatar}})
  }, [])
  
  useEffect(() => {
    setConfig(genConfig(avatar))
  }, [state])


  return <AvatarNice className={className} {...config} {...rest} />
}
