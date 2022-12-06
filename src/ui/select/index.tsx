import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import ReactSelect, { Props } from 'react-select'
import ReactSelectTheme from './ReactSelectTheme'

export interface Options {
  value: string | number
  label: string | number
}

interface SelectProps extends Props {
  options: Options[]
}

function Select({ options, onChange, className = '', ...props }: SelectProps) {
  const { theme } = useTheme()
  const [styles, setStyles] = useState(ReactSelectTheme(theme))

  useEffect(() => {
    setStyles(ReactSelectTheme(theme))
  }, [theme])
  return (
    <ReactSelect
      options={options}
      styles={styles}
      {...props}
      onChange={onChange}
      className={`h-10 ${className} `}
    />
  )
}

export default Select
