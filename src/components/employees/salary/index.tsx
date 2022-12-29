import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import SalaryDetails from './salary-details'
import { WavyChart } from 'ui'
import { SalarySingleObjectType } from 'components/employees/salary/type'

// chart data
const chartData = [
  {
    name: 'Jan',
    uv: 0
  },
  {
    name: 'Feb',
    uv: 40
  },
  {
    name: 'Mar',
    uv: 30
  },
  {
    name: 'Apr',
    uv: 50
  },
  {
    name: 'May',
    uv: 40
  },
  {
    name: 'Jun',
    uv: 60
  },
  {
    name: 'Jul',
    uv: 45
  },
  {
    name: 'Aug',
    uv: 55
  },
  {
    name: 'Sep',
    uv: 70
  },
  {
    name: 'Oct',
    uv: 65
  },
  {
    name: 'Nov',
    uv: 70
  },
  {
    name: 'Dec',
    uv: 55
  }
]

// salary dummy data
const employeeSalaryData: SalarySingleObjectType[] = [
  {
    basic: '2000$',
    overTime: '5',
    absence: '4',
    deduction: '3',
    total: '3000'
  },
  {
    basic: '2000$',
    overTime: '5',
    absence: '4',
    deduction: '3',
    total: '3000'
  },
  {
    basic: '2000$',
    overTime: '5',
    absence: '4',
    deduction: '3',
    total: '3000'
  },
  {
    basic: '2000$',
    overTime: '5',
    absence: '4',
    deduction: '3',
    total: '3000'
  }
]
function Salary() {
  const { t } = useTranslation('common')

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-primary-100 text-base !font-bold capitalize ">
        {t('salary')}
      </h1>
      <div className="sm:h-[30vh] h-[20vh] dark:bg-[#272727] relative rounded-lg overflow-hidden">
        <WavyChart
          data={chartData}
          className="dark:!bg-[#272727] !bg-[#F1F1F1]"
        />
      </div>
      <div>
        <SalaryDetails data={employeeSalaryData} />
      </div>
    </section>
  )
}

export default Salary
