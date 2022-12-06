import { useEffect, useState } from 'react'

function useSSR() {
  const [ssr, setSsr] = useState(false)

  useEffect(() => {
    setSsr(true)
  }, [ssr])

  return { ssr }
}

export default useSSR
