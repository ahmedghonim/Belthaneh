import React from 'react'
import InventoryCard, {
  InventoryCardProps
} from 'components/inventory/inventory-card'

export interface InventoryListProps {
  inventoryList: InventoryCardProps[]
}

export default function InventoryList({ inventoryList }: InventoryListProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
      {inventoryList.map((_item) => (
        <InventoryCard key={_item.id} {..._item} />
      ))}
    </div>
  )
}
