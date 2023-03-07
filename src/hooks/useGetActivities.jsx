import { useEffect, useState } from 'react'

function useGetActivities(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasData, setHasData] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    const headers = new Headers({
      'Content-Type': 'application/json',
      Cookie: document.cookie,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5ZDA1OGIwNGNiNjAwNDE3YWJjYWUiLCJpYXQiOjE2NzYyNjc3MjZ9.4NFtPYgOQnQbWeAQ3Ow0qhyeMszw8cqC5TlOBRlaynM`
    })
    fetch(url, {
      method: 'GET',
      headers: headers
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
  }, [url])

  return {
    data,
    isLoading,
    error,
    isError: Boolean(error),
    isSuccess: Boolean(data),
    hasData
  }
}

export default useGetActivities
