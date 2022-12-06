import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Resize from 'svg/resize.svg'
import Button from 'ui/button'
import DateInputForm from 'ui/dateInput'
import { DateObject } from 'react-multi-date-picker'
import Select from 'ui/select'

export interface Employee {
  value: string
  label: string
}

export interface QueueHeaderProps {
  date?: Date
  employees?: Employee[]
  currentEmployees?: Employee[]
  children?: React.ReactNode
  handleSelectEmployees: (newValue: unknown) => void
  handleChangeDate: (e: DateObject) => void
  handleReport: () => void
  handleResizeScreen: () => void
}

export default function QueueHeader({
  date,
  employees,
  currentEmployees = [],
  handleResizeScreen,
  children,
  handleReport,
  handleSelectEmployees,
  handleChangeDate
}: QueueHeaderProps) {
  const { t } = useTranslation('common')
  const Header = () => (
    <div className="flex sm:justify-end sm:gap-5 gap-4  justify-between">
      <Button
        className="hidden sm:flex justify-center items-center"
        onClick={handleReport}
        primary
      >
        {t('End_Of_The_Day_Report')}
      </Button>
      <Button
        className="sm:block hidden"
        onClick={handleResizeScreen}
        secondary
      >
        <Resize />
      </Button>
    </div>
  )

  const ActionsRow = () => (
    <div className="flex flex-col  sm:flex-row gap-4 w-full sm:w-1/3">
      <DateInputForm
        name={'date'}
        value={date as Date}
        onChange={handleChangeDate}
        className="sm:flex-1 "
      />
      <Select
        className="sm:flex-1 rounded-md max-w-md "
        options={employees ?? []}
        isMulti
        onChange={handleSelectEmployees}
        value={currentEmployees ?? []}
        isOptionDisabled={(option) => currentEmployees.length >= 6}
        placeholder={t('select_employees')}
        id="long-value-select"
        instanceId="long-value-select"
      />
    </div>
  )

  return (
    <>
      <div className="flex justify-between sm:gap-12 w-full">
        <ActionsRow />
        <Header />
      </div>
      {children}
      <Button
        className="flex sm:hidden justify-center mx-auto items-center"
        onClick={handleReport}
        primary
      >
        {t('End_Of_The_Day_Report')}
      </Button>
    </>
  )
}
