import Avatar, { genConfig } from 'react-nice-avatar'
import { useFetch } from '../../../hooks'
import user from '../mocks/user.json'

const userId = user.id

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

function UserAvatar({ className = 'w-32 h-32', ...rest }) {
  
  const URL = `http://localhost:3002/users/${userId}`
  const { data: user, isLoading, isSuccess, isError } = useFetch(URL)

  const { avatar } = user ?? { avatar: defaultStyle }
  const config = genConfig(avatar)

  isLoading && <h3>Loading...</h3>
  isSuccess && <h3>Success...</h3>
  isError && <h3>Fail to load the avatar!</h3>

  return <Avatar className={className} {...config} {...rest} />
}

export default UserAvatar
