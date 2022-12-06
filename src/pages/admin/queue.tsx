import React, { useState } from 'react'
import { data as queueData } from 'components/booking/queue/queue-list/index.mock'
import { Employee } from 'components/booking/booking-header'
import { DateObject } from 'react-multi-date-picker'
import { useFullScreenHandle } from 'react-full-screen'
import { employees } from 'components/booking/forms/appointment-form/index.mock'
import QueueComponent, { QueueProps } from 'components/booking/queue'
import { QueueHeaderProps } from 'components/booking/queue/queue-header'

export default function QueueController() {
  const [currentHeaderData, setCurrentHeaderDate] = useState<Date>(new Date())

  const [currentEmployees, setCurrentEmployees] = useState<Employee[]>([])

  const handle = useFullScreenHandle()

  const handleChangeDateHeader = ({ date }: DateObject) => {
    setCurrentHeaderDate(date as Date)
  }
  const handleSelectEmployees = (employees: unknown) => {
    setCurrentEmployees(employees as Employee[])
  }
  const handleResizeScreen = () => {
    void handle.enter()
  }

  const headerData: QueueHeaderProps = {
    date: currentHeaderData,
    employees,
    currentEmployees,
    handleSelectEmployees,
    handleChangeDate: handleChangeDateHeader,
    handleResizeScreen,
    handleReport: () => undefined
  }

  const data: QueueProps = {
    queueListData: queueData,
    queueHeader: headerData,
    handle
  }

  return <QueueComponent {...data} />
}
