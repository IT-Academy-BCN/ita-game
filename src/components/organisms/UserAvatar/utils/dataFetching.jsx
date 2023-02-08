const getUser = async function (url) {
  try {
    const response = await fetch(url, {
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

const postData = async function (url) {
  try {
    const response = await fetch(url, {
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

const deleteData = async function (url, id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
const updateData = async function (url, id, newAvatar) {
  try {
    const response = await fetch(`${url}/${id}`, {
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

export { getUser, postData, deleteData, updateData }
