import { ActionLineItem } from 'components/reports/action-lines'

const date = new Date()
const yesterday = new Date(date.setDate(date.getDate() - 1))
export const mockList: ActionLineItem[] = [
  {
    id: '1',
    action: 'Added a New Invoice',
    name: 'ahmed',
    date: new Date()
  },
  {
    id: '2',
    action: 'Added a New Invoice',
    name: 'Kamel',
    date: new Date()
  },
  {
    id: '3',
    action: 'Added a New Invoice',
    name: 'Noor',
    date: yesterday
  },
  {
    id: '4',
    action: 'Added a New Invoice',
    name: 'Ali',
    date: new Date()
  },
  {
    id: '5',
    action: 'Added a New Invoice',
    name: 'Salem',
    date: yesterday
  }
]
