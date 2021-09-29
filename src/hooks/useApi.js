import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLodaing] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(url).then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
      setLodaing(false)
      setData(json)
    })
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return { loading, data }
}

export default useApi;