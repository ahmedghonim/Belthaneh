import React from 'react'
import SalaryMobileViewBox from './box'
import { SalaryViewProps } from 'components/employees/salary/type'

function SalaryMobileView({ data }: SalaryViewProps) {
  return (
    <div className="sm:hidden flex flex-col gap-5">
      {data.map((box) => {
        return <SalaryMobileViewBox key={box.total} {...box} />
      })}
    </div>
  )
}

export default SalaryMobileView
