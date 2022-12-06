import React, { useState } from 'react'
import Drawer from './drawer'
import MobileFooterBar from './mobile-footer-bar'
import Header from './header'
import Sidebar from 'components/main-layout/sidebar'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex h-[100vh] relative">
      {/* SidBar */}
      <div
        className={`h-full py-8 ps-8 pe-5 xs:hidden ${
          open ? 'w-[290px]' : 'w-[160px]'
        }`}
      >
        <Sidebar open={open} setOpen={setOpen} />
      </div>

      <div className="w-full relative overflow-auto">
        <div className="sticky top-0 z-50">
          <Header setOpen={setOpen} />
        </div>

        {/* View */}
        <div className="pt-10 w-full sm:pe-8 sm:pb-8 pb-24 xs:px-6">
          {children}
        </div>
      </div>

      {/* Drawer */}
      <Drawer open={open} setOpen={setOpen} />

      {/* Footer Bar  */}
      <MobileFooterBar />
    </div>
  )
}
