import moment from 'moment'
import { BookingItem } from '.'

export const bookingList: BookingItem[] = [
  {
    id: '4',
    employee: { value: '1', label: 'liza' },
    resourceId: '1',
    services: [
      { value: '1', label: 'hair color' },
      { value: '2', label: 'hair cut' }
    ],
    client: { value: '1', label: 'liza' },
    status: 'notPaid' as const,
    phone: '123356',
    start: moment().set('hour', 1).toDate(),
    end: moment().set('hour', 2).toDate(),
    title: `${
      moment().set('hour', 1).format('hh:mm A') +
      ' - ' +
      moment().set('hour', 2).format('hh:mm A')
    }`,
    handleEdit: () => undefined,
    handleDelete: () => undefined
  },
  {
    id: '5',
    employee: { value: '3', label: 'liza' },
    resourceId: '3',
    services: [
      { value: '1', label: 'hair color' },
      { value: '2', label: 'hair cut' }
    ],
    client: { value: '1', label: 'liza' },
    status: 'fromApp' as const,
    phone: '123456',
    start: moment().set('hour', 3).toDate(),
    end: moment().set('hour', 6).toDate(),
    title: `${
      moment().set('hour', 3).format('hh:mm A') +
      ' - ' +
      moment().set('hour', 6).format('hh:mm A')
    }`,
    handleEdit: () => undefined,
    handleDelete: () => undefined
  },
  {
    id: '3',
    resourceId: '2',
    employee: { value: '1', label: 'liza' },
    client: { value: '1', label: 'liza' },
    services: [
      { value: '1', label: 'hair color' },
      { value: '2', label: 'hair cut' }
    ],
    start: moment().set('hour', 0).toDate(),
    end: moment().set('hour', 2).toDate(),
    title: `${
      moment().set('hour', 0).format('hh:mm A') +
      ' - ' +
      moment().set('hour', 2).format('hh:mm A')
    }`,
    status: 'paid' as const,
    phone: '123456',
    handleEdit: () => undefined,
    handleDelete: () => undefined
  }
]

export const employees = [
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    link: '/profile/1',
    employeeName: 'liza',
    resourceId: '1'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    link: '/profile/2',
    employeeName: 'Mary',
    resourceId: '2'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    link: '/profile/1',
    employeeName: 'Nona',
    resourceId: '3'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    link: '/profile/1',
    employeeName: 'Atiat',
    resourceId: '6'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    link: '/profile/1',
    employeeName: 'Samar',
    resourceId: '5'
  },
  {
    img: 'https://www.pngmart.com/files/3/Beautiful-Girl-PNG-File.png',
    link: '/profile/1',
    employeeName: 'Nour',
    resourceId: '4'
  }
]

export const data = {
  employees,
  step: 15,
  startOfDay: moment().startOf('day').toDate(),
  endOfDay: moment().set('hour', 20).toDate(),
  bookingList
}

export const bookingCardMobileData = {
  employees,
  bookings: bookingList
}
