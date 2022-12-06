import React from 'react'
import AsyncSelectApi from 'react-select/async'
interface Options {
  value: string
  label: string
}

function AsyncSelect() {
  const options = [
    { value: 'ahmed', label: 'jock' },
    { value: 'memeo', label: 'ddd' }
  ]
  const handelChange = (value: any) => {
    console.log(value)
  }

  const loadOptions = (
    searchValue: string,
    callback: (options: Options[]) => any
  ) => {
    const filteredOptions = options.filter((options) =>
      options.label.toLowerCase().includes(searchValue.toLowerCase())
    )
    console.log(searchValue, filteredOptions)
    callback(filteredOptions)
  }
  return (
    <AsyncSelectApi
      defaultOptions
      loadOptions={loadOptions}
      onChange={handelChange}
      isMulti
    />
  )
}

export default AsyncSelect
