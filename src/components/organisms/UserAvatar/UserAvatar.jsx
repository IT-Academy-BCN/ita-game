import { useFetch } from './hooks'
import { handleDelete, handlePost } from './utils/handles'
function UserAvatar() {
  const URL = 'http://localhost:3002/users'
  const { data, loading } = useFetch(URL)


  console.log(data)
  console.log(loading)
  return (
    <div>
      UserAvatar
      <button className="btn btn-primary"onClick={handlePost}>change data</button>
      <button className="btn btn-secondary"onClick={_ => handleDelete(1)}>change data</button>
    </div>
  )
}

export default UserAvatar
