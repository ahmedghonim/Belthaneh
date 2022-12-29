import TableAsCards, { CardItem } from './table-as-cards'
import NavigationTabs, { NavigationTabsProps } from './navigation'

export interface MobileCardsProps {
  navigationTabsProps: NavigationTabsProps
  booking: CardItem[]
  employees: CardItem[]
  orders: CardItem[]
}

function MobileCards({
  navigationTabsProps,
  booking,
  employees,
  orders
}: MobileCardsProps) {
  return (
    <div className="flex flex-col gap-6">
      <NavigationTabs {...navigationTabsProps} />
      {navigationTabsProps.selectedCard === 'booking' && (
        <TableAsCards list={booking} />
      )}
      {navigationTabsProps.selectedCard === 'employees' && (
        <TableAsCards list={employees} />
      )}
      {navigationTabsProps.selectedCard === 'orders' && (
        <TableAsCards list={orders} />
      )}
    </div>
  )
}

export default MobileCards
