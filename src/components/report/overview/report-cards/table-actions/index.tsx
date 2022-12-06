import React from 'react'
import TreeDot from 'svg/three-dot.svg'
import { Dropdown } from 'ui'

function TableActions({ data }: { data: object[] }) {
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ]
  return (
    <Dropdown
      icon={<TreeDot className="dark:fill-white fill-dark-300" />}
      options={options}
    />
  )
}

export default TableActions
