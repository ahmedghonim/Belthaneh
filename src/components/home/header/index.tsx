import React from 'react'
import BlthaniaLogo from 'components/common/blthania-logo'
import Navbar from './nav'
import ActionsButtons from './actions'

function Header() {
  return (
    <header className="flex items-center relative z-20">
      <BlthaniaLogo color="!text-black" />
      <Navbar />
      <ActionsButtons />
    </header>
  )
}

export default Header
