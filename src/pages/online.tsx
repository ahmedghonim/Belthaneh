import SalonOnline from 'components/salon-online'
import { useTheme } from 'next-themes'
import React from 'react'

function Online() {
  const { theme, setTheme } = useTheme()

  if (theme === 'dark') {
    setTheme('light')
  }

  return <SalonOnline />
}

export default Online
