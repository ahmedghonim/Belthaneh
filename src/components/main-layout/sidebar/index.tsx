import Toolbar from './toolbar'
import UserInfo from './user-info'
import WarshicStore from './belthanih-store'
import CollapseBtn from 'svg/collapse-btn.svg'
import Logo from '../logo'
import { OpenProps, SetOpenProps } from '../Types'

function Sidebar({ open = true, setOpen }: OpenProps & SetOpenProps) {
  return (
    <div
      className={`${
        open ? 'w-[237px]' : 'w-[95px]'
      }  h-full sm:shadow-2xl rounded-3xl relative sm:dark:bg-dark-200 duration-200 sm:bg-white`}
    >
      {/* collapse button */}
      <button
        className={`${
          open ? 'rtl:-rotate-180' : 'ltr:rotate-180'
        } ltr:-right-2 rtl:-left-3 duration-100 top-16 absolute rounded-full bg-primary-400 xs:hidden`}
        onClick={() => setOpen(!open)}
      >
        <CollapseBtn />
      </button>

      {/* Logo and User Avatar */}
      <div
        className={`flex flex-col gap-4 ${
          open ? 'px-4' : 'gap-0 p-0 px-2'
        } h-full pb-4`}
      >
        <div
          className={`${
            open ? 'pt-6' : 'flex-col pb-0'
          } flex items-center gap-3 justify-center xs:hidden`}
        >
          <Logo open={open} />
        </div>

        <UserInfo open={open} />

        <Toolbar open={open} setOpen={setOpen} />

        <WarshicStore open={open} />
      </div>
    </div>
  )
}

export default Sidebar
