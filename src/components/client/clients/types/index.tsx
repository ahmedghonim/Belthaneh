// data type
export interface HeadDataType {
  name: string
  totalSales: string | number
}

export interface BodyDataType {
  phoneNum: string | number
  totalVisits: string | number
  notes: string
}

export interface DataType extends HeadDataType, BodyDataType {
  id?: string
}

// form initial values
export interface FormInitialValuesType {
  phone: string
  name: string
  mail: string
  gender: string
  birth: string
  message: string
}

// add customer function
export interface AddCustomerFunctionProp {
  searchHandler: () => void
  setMethod: React.Dispatch<React.SetStateAction<boolean>>
}

// clients booking props at mobile
export interface DataPropType {
  data: DataType[]
}
