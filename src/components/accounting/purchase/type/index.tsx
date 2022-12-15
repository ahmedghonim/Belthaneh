export interface PurchasesInvoicesType {
  invoiceNo: string | number
  clause: string
  Cost: string | number
  source: string
  date: string
  showForm?: () => void
}

export interface PurchasesInvoicesDataProps {
  data: PurchasesInvoicesType[]
  showForm?: () => void
}

export interface PurchasesFormProps {
  show: boolean
  hideFun: React.Dispatch<React.SetStateAction<boolean>>
}

export interface PurchasedItemsType {
  item: string | number
  unitPrice: number
  cost: number
  QTY: string
  Price: number
  id?: string | number
}
