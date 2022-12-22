export interface SalarySingleObjectType {
  basic: string | number
  overTime: string | number
  absence: string | number
  deduction: string | number
  total: string | number
}

export interface SalaryViewProps {
  data: SalarySingleObjectType[]
}
