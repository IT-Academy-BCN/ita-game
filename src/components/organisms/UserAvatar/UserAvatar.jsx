import Avatar, { genConfig } from 'react-nice-avatar'
import { useFetch } from '../../../hooks'

const defaultStyle = {
  sex: 'man',
  hairStyle: 'mohawk',
  hatStyle: 'turban',
  hatColor: '#58c914',
  eyeStyle: 'smile', // eyeStyle	string		circle, oval, smile
  glassesStyle: 'round', // glassesStyle	string		none, round, square
  noseStyle: 'long', // noseStyle	string		short, long, round
  shirtStyle: 'short', // shirtStyle	string		hoody, short, polo
  shirtColor: 'peru',
  bgColor: '#1e4b8f'
}
/**
 * Avatar takes a user id to get his avatar profile.
 * @param {Object} useId, user.id - The user id of an users array.
 * @param {Object} ...rest, of props.
 */

function UserAvatar({ userId = 1, ...rest }) {
  const URL = `http://localhost:3002/users/${userId}`
  const { data: user, isLoading, isSuccess, isError } = useFetch(URL)

  const { avatar } = user ?? { avatar: defaultStyle }
  const config = genConfig(avatar)

  isLoading && <h3>Loading...</h3>
  isSuccess && <h3>Success...</h3>
  isError && <h3>Error! No data!</h3>

  return <Avatar {...config} {...rest} />
}

export default UserAvatar
