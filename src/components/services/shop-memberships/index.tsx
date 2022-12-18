import Navigation from '../navigation'
import CardSummary, { CardSummaryProps } from './card-summary'
import Memberships, { MembershipsProps } from './memberships'

export interface ShopMembershipsProps {
  list: MembershipsProps['list']
  cards: CardSummaryProps[]
  handleAddMember: () => void
}
export default function ShopMemberships({
  list,
  cards,
  handleAddMember
}: ShopMembershipsProps) {
  return (
    <>
      <div className="space-y-5">
        <Navigation handleAddMembership={handleAddMember} />
        <div className="flex gap-5 sm:w-1/2 w-full">
          {cards.map((_item) => (
            <CardSummary {..._item} key={_item.id} />
          ))}
        </div>
        <Memberships list={list} />
      </div>
    </>
  )
}
