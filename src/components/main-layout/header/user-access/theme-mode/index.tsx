import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import LightIcon from 'svg/sun.svg'
import DarkIcon from 'svg/dark-mode.svg'

function ThemeMode() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(theme !== 'dark')
  }, [theme])

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setIsDark(theme === 'dark')
      }}
    >
      {isDark ? <LightIcon /> : <DarkIcon />}
    </button>
  )
}

export default ThemeMode
