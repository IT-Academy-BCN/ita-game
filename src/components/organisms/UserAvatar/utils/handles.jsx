const URL = 'http://localhost:3002/users'

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
const handleUpdate = async function updateData(id, newAvatar) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ avatar: newAvatar })
    })

    const result = await response.json()
  } catch (error) {
    console.error(error)
  }
}

export { handlePost, handleDelete, handleUpdate }