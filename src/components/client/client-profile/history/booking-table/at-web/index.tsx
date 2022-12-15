import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
  BookingTableType,
  Invoice
} from 'components/client/client-profile/types'
import { Table, Button } from 'ui'
import TableActions from 'ui/table/actions'
import CloseIcon from 'svg/x.svg'

interface Props {
  data: BookingTableType[]
}

function WebClientBookings({ data }: Props) {
  const { t } = useTranslation('common')
  const [showInvoice, setShowInvoice] = useState<Invoice>({
    show: false,
    src: ''
  })

  // show invoice function
  const showInvoiceFun = () => {
    setShowInvoice({
      show: true,
      src: 'https://i1.wp.com/blog.mypos.eu/wp-content/uploads/2021/09/invoice-example.jpg?w=750&ssl=1'
    })
  }
  // show invoice function
  const hideInvoiceFun = () => {
    setShowInvoice({ show: false, src: '' })
  }

  // table columns
  const columns = [
    {
      Header: t('booking_no'),
      accessor: 'BookingNo'
    },
    {
      Header: t('service'),
      accessor: 'service'
    },
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('employee'),
      accessor: 'employees'
    },
    {
      Header: t('pricing'),
      accessor: 'pricing'
    },
    {
      Header: t('status'),
      accessor: 'status',
      Cell: ({ row }: { row: any }) => (
        <span
          className={`${
            ['completed', 'paid'].includes(row.original.status)
              ? 'text-success-200'
              : 'text-[#F92618]'
          }`}
        >
          {row.original.status}
        </span>
      )
    },
    {
      id: 'show-reciept',
      Header: '',
      Cell: () => <TableActions onShow={showInvoiceFun} />
    }
  ]

  return (
    <div className="xs:hidden">
      <Table data={data} columns={columns} noDataMessage={t('no_data')} />
      <div
        className={`${
          showInvoice.show ? 'block' : 'hidden'
        } flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
      >
        <Button
          className="w-fit ml-auto bg-transparent absolute top-0 right-0"
          onClick={hideInvoiceFun}
        >
          <CloseIcon />
        </Button>
        <div className="w-1/2 h-3/4">
          <img
            className="w-full h-full"
            src={showInvoice.src}
            alt={t('invoice')}
          />
        </div>
      </div>
    </div>
  )
}

export default WebClientBookings
