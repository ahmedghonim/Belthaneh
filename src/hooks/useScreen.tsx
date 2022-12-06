import { useState, useEffect } from 'react'

const useScreen = (mode = 'desktop') => {
  const [screen, setScreen] = useState(mode)

  useEffect(() => {
    const observerResize = () => {
      switch (true) {
        case window.innerWidth > 1024:
          setScreen('desktop')
          break
        case window.innerWidth <= 1024 && window.innerWidth > 640:
          setScreen('tablet')
          break

        default:
          setScreen('phone')
          break
      }
    }

    observerResize()
    window.addEventListener('resize', observerResize)
    return () => {
      window.removeEventListener('resize', observerResize)
    }
  }, [])

  return screen
}

export default useScreen
