
const getData = async function (URL) {
  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}


const postData = async function (URL) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: 'valor'
      })
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

const deleteData = async function (URL, id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
const updateData = async function (URL, id, newAvatar) {
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

export { getData, postData, deleteData, updateData }
