import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import AttendanceTable from './Table'
import AttendanceBox from './boxs'
import { AttendanceSingleObjectType } from 'components/employees/attendance/type'

// attendance dummy data
const attendanceData: AttendanceSingleObjectType[] = [
  { date: '25/10/2022', attend: '7:30 Am', leave: '7:30 Am', overTime: '2' },
  { date: '25/10/2022', attend: '7:30 Am', leave: '7:30 Am', overTime: '2' },
  { date: '25/10/2022', attend: '7:30 Am', leave: '7:30 Am', overTime: '2' },
  { date: '25/10/2022', attend: '7:30 Am', leave: '7:30 Am', overTime: '2' }
]

function Attendance() {
  const { t } = useTranslation('common')
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-primary-100 text-base !font-bold capitalize ">
        {t('attendance')}
      </h1>
      <div>
        <AttendanceTable data={attendanceData} />
        <AttendanceBox data={attendanceData} />
      </div>
    </section>
  )
}
export default Attendance
