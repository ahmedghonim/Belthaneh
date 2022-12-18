import React, { useState } from 'react'
import Drawer from './drawer'
import MobileFooterBar from './mobile-footer-bar'
import Header from './header'
import Sidebar from 'components/main-layout/sidebar'
import useScreen from 'hooks/useScreen'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  const [open, setOpen] = useState(true)
  const screen = useScreen()

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

      <div className="w-full relative overflow-auto h-[100vh]">
        <div className="sticky top-0 z-50">
          <Header setOpen={setOpen} />
        </div>

        {/* View */}
        <div className="pt-10 w-full sm:pe-8 sm:pb-8 pb-20 xs:px-6 h-[calc(100%-90px)] overflow-y-auto">
          {children}
        </div>
      </div>

      {/* Drawer */}
      {screen === 'phone' ? <Drawer open={open} setOpen={setOpen} /> : null}

      {/* Footer Bar  */}
      <MobileFooterBar />
    </div>
  )
}

function LayoutProvider({ children }: Props): JSX.Element {
  const router = useRouter()

  return !disableLayoutFor(router.asPath) ? (
    <MainLayout>{children}</MainLayout>
  ) : (
    <>{children}</>
  )
}

export default LayoutProvider

const disableLayoutFor = (url: string) => {
  return [
    /^(\/(ar|en))?\/login/,
    /^(\/(ar|en))?\/signup/,
    /^(\/(ar|en))?\/reset-password/,
    /^(\/(ar|en))?\/forget-password/,
    /^(\/(ar|en))?\/recovery-password/,
    /^(\/(ar|en))?\/online/
  ].some((fullPageRegex) => fullPageRegex.test(url))
}
