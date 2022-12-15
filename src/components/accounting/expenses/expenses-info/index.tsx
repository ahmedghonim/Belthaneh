import React from 'react'
import WebExpensesInfo from './web-view'
import MobileExpensesInfo from './mobile-view'

function ExpensesInfo() {
  const boxsDummyData = {
    salaries: '15000',
    rent: '1989$',
    ElectricityWater: '1500$',
    fees: '500$'
  }

  return (
    <div>
      <WebExpensesInfo {...boxsDummyData} />
      <MobileExpensesInfo {...boxsDummyData} />
    </div>
  )
}

export default ExpensesInfo
