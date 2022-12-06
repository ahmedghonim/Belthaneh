import React from 'react'
import { OpenProps, SetOpenProps } from '../Types'
import CloseIcon from 'svg/close.svg'
import Sidebar from 'components/main-layout/sidebar'
function Drawer({ open, setOpen }: OpenProps & SetOpenProps) {
  return (
    <div
      className={`absolute sm:hidden dark:bg-dark-200 bg-white z-50 duration-200 ${
        !open ? 'w-full' : 'scale-0'
      } h-[100vh]`}
    >
      <span
        className="absolute ltr:right-7 rtl:left-7 top-7"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CloseIcon className="stroke-dark-100 dark:stroke-white" />
      </span>
      <div className="ps-10 pt-20">
        <Sidebar open={true} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default Drawer
