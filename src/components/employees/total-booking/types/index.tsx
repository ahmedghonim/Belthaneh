// total booking types------------------------------
export interface TotalBookingBoxProps {
  num: number | string
  type: string
}
export interface TotalBookingDataType {
  monthly: string
  weekly: string
  daily: string
}

export interface TootalBookingView {
  data: TotalBookingDataType
}

// today booking types------------------------------

export interface BookingSingleObjectType {
  client: string
  date: string
  service: string
  price: string | number
  status: string | boolean
}

export interface TodayBookingViewsProps {
  data: BookingSingleObjectType[]
}
