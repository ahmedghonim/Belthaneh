export interface ExpensesInfoProps {
  salaries: string | number
  rent: string | number
  ElectricityWater: number | string
  fees: string | number
}

export interface ExpensesInvoicesType {
  invoiceNo: string | number
  clause: string
  Cost: string | number
  source: string
  date: string
  editEx?: () => void
}

export interface ExpensesInvoicesPropsType {
  data: ExpensesInvoicesType[]
  onEdit: () => void
}

// expenses forms
export interface ExpensesFormInitialValues {
  type: string
  clause: string
  source: string
  date: string
  price: string | number
  discount: string | number
  paid: string | number
  vat: string | number
  recipient: string
  invoiceNum: string | number
  description?: string
  src?: string
}

export interface AddExpencessFormPropsType {
  type: string
  dataObj: ExpensesFormInitialValues
  show: boolean
  hideFun: () => void
}

export interface ExpensesFormControlersType {
  show: boolean
  type: string
  dataObj: ExpensesFormInitialValues
}
