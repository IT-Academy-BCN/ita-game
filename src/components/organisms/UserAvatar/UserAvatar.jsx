import { useFetch } from './hooks'
import { handleDelete, handlePost, handleUpdate } from './utils/handles'
function UserAvatar() {
  const URL = 'http://localhost:3002/users'
  const { data } = useFetch(URL)


  return (
    <div>
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
    </div>
  )
}

export default UserAvatar
