import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasData, setHasData] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(url)
      .then(response => response.json())
      .then(d => {
        setData(d)
        setLoading(false)
        if (data && data.length === 0) {
          setHasData(false)
        }
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error, isError: Boolean(error), isSuccess: Boolean(data), hasData }
}

export default useFetch
