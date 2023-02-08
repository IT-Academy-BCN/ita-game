import { useFetch } from '../../../hooks'
function UserAvatar() {
  const URL = 'http://localhost:3002/users'
  const { data, loading } = useFetch(URL)

  const handlePost = async function postData() {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: 'valor'
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleDelete = async function deleteData(id) {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

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
