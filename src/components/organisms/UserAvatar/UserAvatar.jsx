import Avatar, { genConfig } from 'react-nice-avatar'
import { useFetch } from './hooks'
import { deleteData, postData, getData, updateData } from './utils/dataFetching'
const URL = 'http://localhost:3002/users'

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

function UserAvatar({ useId = 1, ...rest }) {
  const config = genConfig(defaultStyle)

  const URL = 'http://localhost:3002/users'
  const { data } = useFetch(URL)

  return (
    <article>
      <section className="bg-orange-600 rounded-full w-36 h-36">
        <Avatar {...config} {...rest} />
      </section>

      <section>
        UserAvatar
        <button className="btn btn-primary" onClick={_ => getData(URL)}>
          get data
        </button>
        <button className="btn btn-primary" onClick={_ => postData(URL)}>
          post data
        </button>
        <button className="btn btn-secondary" onClick={_ => deleteData(URL, 4)}>
          delete data
        </button>
        <button
          className="btn btn-warning"
          onClick={_ =>
            updateData(URL, 1, {
              sex: 'woman 👗',
              hairStyle: 'pixie'
            })
          }
        >
          update data
        </button>
      </section>
    </article>
  )
}

export default UserAvatar
