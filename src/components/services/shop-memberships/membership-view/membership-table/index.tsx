import useTranslation from 'next-translate/useTranslation'
import { Table, Text } from 'ui'
import { Row } from 'react-table'
import moment from 'moment'
import {
  MembershipViewProps,
  MembershipViewItem
} from 'components/services/shop-memberships/membership-view'

export default function MembershipTable({ list }: MembershipViewProps) {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('invoice_no'),
      accessor: 'invoiceNo'
    },
    {
      Header: t('client'),
      accessor: 'clientName'
    },
    {
      Header: t('phone'),
      accessor: 'phone'
    },
    {
      Header: t('joinDate'),
      Cell: ({ row }: { row: Row<MembershipViewItem> }) =>
        moment(row.original.joinDate).format('DD/MM/YYYY')
    },
    {
      Header: t('expireDate'),
      Cell: ({ row }: { row: Row<MembershipViewItem> }) =>
        moment(row.original.expireDate).format('DD/MM/YYYY')
    },
    {
      Header: t('price'),
      accessor: 'price'
    },
    {
      Header: t('state'),
      Cell: ({ row }: { row: Row<MembershipViewItem> }) =>
        row.original.status === 'active' ? (
          <Text className="!text-success-200">{t('Active')}</Text>
        ) : (
          <Text danger>{t('expired')}</Text>
        )
    }
  ]
  return (
    <div className="sm:block hidden">
      <Table
        columns={columns}
        data={list}
        noDataMessage={t('no_data_to_show')}
      />
    </div>
  )
}
