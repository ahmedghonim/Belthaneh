import { Employee, BookingItem } from 'components/booking/queue/queue-card'

export const bookings: BookingItem[] = [
  {
    resourceId: '1',
    id: '4',
    userName: 'name 1',
    status: 'notPaid' as const,
    services: ['hair color', 'hair cut'],
    phone: '123456'
  },
  {
    resourceId: '2',
    id: '3',
    userName: 'name 2',
    status: 'paid' as const,
    services: ['hair color', 'hair cut'],
    phone: '123456'
  }
]
export const employees: Employee[] = [
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    employeeName: 'liza',
    resourceId: '1'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    employeeName: 'Mary',
    resourceId: '2'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    employeeName: 'Nona',
    resourceId: '3'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    employeeName: 'Atiat',
    resourceId: '6'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    employeeName: 'Samar',
    resourceId: '5'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    employeeName: 'Nour',
    resourceId: '4'
  }
]

export const data = {
  employees,
  bookings
}
