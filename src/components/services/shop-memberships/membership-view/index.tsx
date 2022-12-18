import MembershipMobileCard from './membership-view-card-mobile'
import MembershipTable from './membership-table'

export interface MembershipViewItem {
  invoiceNo: string
  clientName: string
  phone: string
  joinDate: Date
  expireDate: Date
  price: number
  status: string
}

export interface MembershipViewProps {
  list: MembershipViewItem[]
}

export default function MembershipView({ list }: MembershipViewProps) {
  return (
    <>
      <MembershipTable list={list} />
      <div className="flex flex-col gap-4">
        {list.map((_item) => (
          <MembershipMobileCard {..._item} key={_item.invoiceNo} />
        ))}
      </div>
    </>
  )
}
