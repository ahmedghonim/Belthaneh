export interface AttendanceSingleObjectType {
  date: string
  attend: string | number
  leave: string | number
  overTime: string | number
}

export interface AttendanceViewProps {
  data: AttendanceSingleObjectType[]
}
