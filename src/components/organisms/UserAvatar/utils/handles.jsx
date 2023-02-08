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

export { handlePost, handleDelete }