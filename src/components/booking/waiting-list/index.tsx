import React from 'react'
import WaitingListTable, {
  WaitingListTableProps
} from 'components/booking/waiting-list/waiting-list-table'
import WaitingListMobile from 'components/booking/waiting-list/waiting-list-mobile'
import { WaitingListCardProps } from 'components/booking/waiting-list/waiting-list-card'

export interface WaitingListProps {
  waitingListCardData: WaitingListCardProps[]
  waitingListTableProps: WaitingListTableProps['waitingList']
}

export default function WaitingList({
  waitingListCardData,
  waitingListTableProps
}: WaitingListProps) {
  return (
    <div className="flex flex-col gap-7">
      <WaitingListTable waitingList={waitingListTableProps} />
      <WaitingListMobile data={waitingListCardData} />
    </div>
  )
}
