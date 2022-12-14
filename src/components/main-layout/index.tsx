import React, { useState } from 'react'
import Drawer from './drawer'
import MobileFooterBar from './mobile-footer-bar'
import Header from './header'
import Sidebar from 'components/main-layout/sidebar'
import useScreen from 'hooks/useScreen'
import { useRouter } from 'next/router'
import EmployeeLayout from 'components/employees/employee-layout'
import { employees } from 'components/employees/home/employee-list/index.mock'

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  const [open, setOpen] = useState(true)
  const screen = useScreen()
  const router = useRouter()
  const formattedEmployee = {
    ...employees[0],
    handleLeave: undefined,
    handleViewProfile: undefined,
    handleEdit: undefined,
    handleDelete: undefined
  }
  return (
    <div className="flex sm:h-[100vh] xs:h-full relative">
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
        <div className="pt-10 w-full sm:pe-8 sm:pb-8 pb-20 xs:px-6 sm:h-[calc(100%-90px)] overflow-y-auto">
          {/* {children} */}
          {disableLayoutForEmployee(router.asPath) ? (
            <EmployeeLayout employeeCardData={formattedEmployee}>
              {children}
            </EmployeeLayout>
          ) : (
            children
          )}
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

  return disableLayoutFor(router.asPath) ? (
    <MainLayout>{children}</MainLayout>
  ) : (
    <>{children}</>
  )
}

export default LayoutProvider

const disableLayoutFor = (url: string) => {
  return [/^(\/(ar|en))?\/admin\/.*?/].some((fullPageRegex) =>
    fullPageRegex.test(url)
  )
}
const disableLayoutForEmployee = (url: string) => {
  return [
    /^(\/(ar|en))?\/admin\/employee\/((?!add-employee|([0-9]*[0-9]*)\/edit-employee).*?)/
  ].some((fullPageRegex) => fullPageRegex.test(url))
}
