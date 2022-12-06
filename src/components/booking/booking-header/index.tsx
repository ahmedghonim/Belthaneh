import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Plus from 'svg/plus.svg'
import Resize from 'svg/resize.svg'
import Button from 'ui/button'
import DateInputForm from 'ui/dateInput'
import { DateObject } from 'react-multi-date-picker'
import Select from 'ui/select'
import { ToggleButton } from 'ui'

export interface Employee {
  value: string
  label: string
}

export interface BookingCalendarHeaderData {
  date?: Date
  employees?: Employee[]
  currentType?: 'waitingList' | 'calendar'
  currentEmployees?: Employee[]
}
export interface BookingCalendarHeaderProps {
  date?: Date
  employees?: Employee[]
  currentType?: 'waitingList' | 'calendar'
  currentEmployees?: Employee[]
  children?: React.ReactNode
  addNewBooking: () => void
  addToWaitingList: () => void
  handleToggleBookingType: () => void
  handleSelectEmployees: (newValue: unknown) => void
  handleChangeDate: (e: DateObject) => void
  handleReport: () => void
  handleResizeScreen: () => void
}

export function BookingCalendarHeader({
  date,
  employees,
  currentType,
  currentEmployees = [],
  handleResizeScreen,
  children,
  handleReport,
  addToWaitingList,
  addNewBooking,
  handleToggleBookingType,
  handleSelectEmployees,
  handleChangeDate
}: BookingCalendarHeaderProps) {
  const { t } = useTranslation('common')
  const Header = () => (
    <div className="flex sm:justify-end sm:gap-5 gap-4  justify-between">
      <Button
        primary
        onClick={addNewBooking}
        className="flex-1 sm:flex-initial justify-center"
      >
        <Plus />
        {t('Add_booking')}
      </Button>
      <Button
        className="flex-1  sm:flex-initial justify-center"
        primary
        onClick={addToWaitingList}
      >
        <Plus />
        {t('Add_waiting')}
      </Button>
      <Button
        className="hidden sm:flex justify-center"
        onClick={handleReport}
        primary
      >
        {t('End_Of_The_Day_Report')}
      </Button>
    </div>
  )

  const ActionsRow = () => (
    <div className="sm:flex  justify-between">
      <ToggleButton
        first={{ label: t('Calendar'), value: 'calendar' }}
        second={{ label: t('waiting_List'), value: 'waitingList' }}
        checked={currentType ?? 'Calendar'}
        handleToggle={handleToggleBookingType}
        className="w-[352px] hidden sm:flex"
      />

      <div className="flex flex-col  sm:flex-row gap-4">
        <DateInputForm
          name={'date'}
          value={date as Date}
          onChange={handleChangeDate}
          className="flex-1"
        />
        <Select
          className="flex-1 rounded-md max-w-md min-w-max"
          options={employees ?? []}
          isMulti
          onChange={handleSelectEmployees}
          value={currentEmployees ?? []}
          isOptionDisabled={(option) => currentEmployees.length >= 6}
          id="long-value-select"
          instanceId="long-value-select"
          placeholder={t('select_employees')}
        />
        <Button
          className="sm:block hidden"
          onClick={handleResizeScreen}
          secondary
        >
          <Resize />
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <div className="flex flex-col gap-7 sm:gap-12 w-full">
        <ToggleButton
          first={{ label: t('Calendar'), value: 'calendar' }}
          second={{ label: t('waiting_List'), value: 'waitingList' }}
          checked={currentType ?? 'Calendar'}
          handleToggle={handleToggleBookingType}
          className="flex sm:hidden"
        />
        <Header />
        <ActionsRow />
      </div>
      {children}
      <Button
        className="sm:hidden justify-center mx-auto flex"
        onClick={handleReport}
        primary
      >
        {t('End_Of_The_Day_Report')}
      </Button>
    </>
  )
}
