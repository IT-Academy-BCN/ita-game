import { useState } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { useFetch } from './hooks'
import { handleDelete, handlePost, handleUpdate } from './utils/handles'
function UserAvatar() {
  const [character] = useState({
    sex: 'man',
    hairStyle: 'mohawk'
  })
  const config = genConfig(character) 

  const URL = 'http://localhost:3002/users'
  const { data } = useFetch(URL)

  return (
    <article>
      <section>
        <Avatar className="w-32 h-32" {...config} />
      </section>


      <section>
        UserAvatar
        <button className="btn btn-primary" onClick={handlePost}>
          change data
        </button>
        <button className="btn btn-secondary" onClick={_ => handleDelete(1)}>
          change data
        </button>
        <button
          className="btn btn-warning"
          onClick={_ =>
            handleUpdate(1, {
              sex: 'woman 👗',
              hairStyle: 'pixie'
            })
          }
        >
          change data
        </button>
      </section>
    </article>
  )
}

export default UserAvatar
