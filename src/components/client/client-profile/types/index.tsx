export interface BoxsDataType {
  lastService: string
  payment: string | number
  visitsNum: string | number
  mostServices: string
}

export interface LeftSideType {
  src: string
  ratings: string | number
  activity: string | number
}

export interface RightSideType {
  name: string
  birthDay: string
  mobile: string | number
  gender: 'male' | 'female'
  notes: string
}

export interface PersonalDataType extends LeftSideType, RightSideType {}

export interface RightSideBoxType {
  head: string
  value: string | number
  className?: string
}

export interface BookingTableType {
  BookingNo: string
  service: string
  date: string
  employees: string
  pricing: string
  status: string
}

export interface OrdersTableType {
  OrderNo: string
  customer: string
  date: string
  order: string
  pricing: string | number
  status: string
}

export interface ChartToolTipType {
  active: boolean
  payload: any
}

export interface Invoice {
  show: boolean
  src: string
}
