import TableActions, { Props as ActionProps } from 'ui/table/actions'

export const bookingData = [
  {
    client: 'Saa fahad',
    date: '5/11/2022',
    service: 'Resistance Bain EX',
    pricing: '$120',
    status: 'Completed',
    onEdit: () => undefined,
    onDelete: () => undefined
  },
  {
    client: 'Saa fahad',
    date: '5/11/2022',
    service: 'Resistance Bain EX',
    pricing: '$120',
    status: 'Cancelled',
    onEdit: () => undefined,
    onDelete: () => undefined
  }
]
export const employeesData = [
  {
    employee: 'Saa fahad',
    date: '5/11/2022',
    service: 'Resistance Bain EX',
    pricing: '$120',
    status: 'Completed',
    onEdit: () => undefined,
    onDelete: () => undefined
  },
  {
    employee: 'Saa fahad',
    date: '5/11/2022',
    service: 'Resistance Bain EX',
    pricing: '$120',
    status: 'Cancelled',
    onEdit: () => undefined,
    onDelete: () => undefined
  }
]
export const orderTableData = [
  {
    client: 'Saa fahad',
    date: '5/11/2022',
    order: 'Resistance Bain EX',
    pricing: '$120',
    status: 'Completed',
    onEdit: () => undefined,
    onDelete: () => undefined
  },
  {
    client: 'Saa fahad',
    date: '5/11/2022',
    order: 'Resistance Bain EX',
    pricing: '$120',
    status: 'Cancelled',
    onEdit: () => undefined,
    onDelete: () => undefined
  }
]
export const bookingColumns = [
  {
    Header: 'clients',
    accessor: 'client'
  },
  {
    Header: 'date',
    accessor: 'date'
  },
  {
    Header: 'service',
    accessor: 'service'
  },
  {
    Header: 'pricing',
    accessor: 'pricing'
  },
  {
    Header: 'status',
    accessor: 'status'
  },
  {
    Header: 'actions',
    Cell: ({ row }: { row: { original: object[] } }) => (
      <TableActions {...(row.original as ActionProps)} />
    )
  }
]
export const employeesColumns = [
  {
    Header: 'employees',
    accessor: 'employee'
  },
  {
    Header: 'date',
    accessor: 'date'
  },
  {
    Header: 'service',
    accessor: 'service'
  },
  {
    Header: 'pricing',
    accessor: 'pricing'
  },
  {
    Header: 'status',
    accessor: 'status'
  },
  {
    Header: 'actions',
    Cell: ({ row }: { row: { original: object[] } }) => (
      <TableActions {...(row.original as ActionProps)} />
    )
  }
]
export const orderColumns = [
  {
    Header: 'clients',
    accessor: 'client'
  },
  {
    Header: 'date',
    accessor: 'date'
  },
  {
    Header: 'order',
    accessor: 'order'
  },
  {
    Header: 'pricing',
    accessor: 'pricing'
  },
  {
    Header: 'status',
    accessor: 'status'
  },
  {
    Header: 'actions',
    Cell: ({ row }: { row: { original: object[] } }) => (
      <TableActions {...(row.original as ActionProps)} />
    )
  }
]
