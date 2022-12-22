import React from 'react'
import AttendanceBox from './box'
import { AttendanceViewProps } from 'components/employees/attendance/type'

function AttendenceBoxs({ data }: AttendanceViewProps) {
  return (
    <div className="sm:hidden flex flex-col gap-5">
      {data.map((box) => {
        return <AttendanceBox key={box.date} {...box} />
      })}
    </div>
  )
}

export default AttendenceBoxs
