import { DateObject } from 'react-multi-date-picker'

export const employees = [
  { label: 'liza', value: '1' },
  { label: 'Mary', value: '2' },
  { label: 'Nona', value: '3' },
  { label: 'Atiat', value: '6' },
  { label: 'Samar', value: '5' },
  { label: 'Nour', value: '4' }
]

const mockData = {
  date: new Date(),
  employees,
  currentEmployees: [employees[0]],
  handleSelectEmployees: (e: unknown) => undefined,
  handleChangeDate: (e: DateObject) => undefined,
  handleReport: () => undefined,
  handleResizeScreen: () => undefined
}
export default mockData
