import React from 'react'
import WaitingListCard, {
  WaitingListCardProps
} from 'components/booking/waiting-list/waiting-list-card'

export default function WaitingListMobile({
  data
}: {
  data: WaitingListCardProps[]
}) {
  return (
    <div className="sm:hidden flex flex-col  gap-4 w-full   h-[60vh] overflow-y-scroll ">
      {data?.map((_item) => (
        <WaitingListCard {..._item} key={_item?.id} />
      ))}
    </div>
  )
}
