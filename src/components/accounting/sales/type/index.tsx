// sales interfaces
export interface TableActionsType {
  onReturn: () => void
  onView: () => void
}

export interface RecieptItemsType {
  serviceName: string
  amount: string | number
  price: string | number
  discount: string | number
  employer: string
  date: string
  id?: string
}

export interface SalesInfoType {
  invoiceNo: string | number
  client: string
  phoneNum: string | number
  clause: string
  cost: string
  date: string
  id?: string | number
  returnFun?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SalesInvoicesProps {
  data: SalesInfoType[]
  returnFun: React.Dispatch<React.SetStateAction<boolean>>
}

export interface RefundFormPropsType {
  data: RecieptItemsType[]
  show: boolean
  formControler: React.Dispatch<React.SetStateAction<boolean>>
}
