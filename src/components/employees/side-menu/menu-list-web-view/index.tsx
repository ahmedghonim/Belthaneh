import React from 'react'
import MenuListItem from '../menu-item'
import {
  MenuProps,
  MenuListItemProps
} from 'components/employees/side-menu/types'

function MenuListWebView({ listItems }: MenuProps) {
  return (
    <div className="flex flex-col gap-7">
      {listItems.map((item: MenuListItemProps) => {
        return <MenuListItem key={item.href} {...item} />
      })}
    </div>
  )
}

export default MenuListWebView
