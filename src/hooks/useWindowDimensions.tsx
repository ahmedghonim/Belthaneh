import { useState, useEffect } from 'react'

type TWindowSize = [number, number]

export default function useWindowDimensions() {
  const initSize: TWindowSize = [window.innerWidth, window.innerHeight]
  const [windowSize, setWindowSize] = useState<TWindowSize>(initSize)

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
