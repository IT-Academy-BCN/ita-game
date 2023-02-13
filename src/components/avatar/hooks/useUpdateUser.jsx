import { useEffect, useState } from 'react'

function useUpdateUser(url, updatePropety) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasData, setHasData] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    const headers = new Headers({
      'Content-Type': 'application/json',
      Cookie: document.cookie
    })
    fetch(url, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(updatePropety)
    })
      .then(response => response.json())
      .then(response => {
        setData(response)
        setIsLoading(false)
        if (data && data.length === 0) {
          setHasData(false)
        }
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [url, updatePropety])

  return {
    data,
    isLoading,
    error,
    isError: Boolean(error),
    isSuccess: Boolean(data),
    hasData
  }
}

export default useUpdateUser
