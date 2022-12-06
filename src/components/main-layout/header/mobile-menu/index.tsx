import React from 'react'
import Logo from 'components/main-layout/logo'
import Burger from 'svg/burger.svg'
import { SetOpenProps } from 'components/main-layout/Types'
function MobileMenu({ setOpen }: SetOpenProps) {
  return (
    <div className="flex-1 flex gap-4 sm:hidden">
      <span onClick={() => setOpen((prev) => !prev)}>
        <Burger />
      </span>
      <Logo open={true} />
    </div>
  )
}

export default MobileMenu
