import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasData, setHasData] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    fetch(url)
      .then(response => response.json())
      .then(d => {
        setData(d)
        setIsLoading(false)
        if (data && data.length === 0) {
          setHasData(false)
        }
      })
      .catch(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [url])

  return { data, isLoading, error, isError: Boolean(error), isSuccess: Boolean(data), hasData }
}

export default useFetch
