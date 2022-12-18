import React, { useState } from 'react'
import BlthaniaLogo from '../blthania-logo'
import DropdownIcon from 'svg/arrow.svg'
import Bars from 'svg/bars.svg'

function Header() {
  const [show, setShow] = useState<boolean>(false)
  // show menu in mobile
  const showMenu = () => {
    setShow(!show)
  }
  // change language function
  const changeLanguageFun = () => {}

  return (
    <header className="flex xs:justify-between items-center xs:relative">
      <div className="flex items-center gap-3">
        <BlthaniaLogo />
      </div>
      <div
        className={`sm:flex items-center justify-between flex-1 xs:flex-col xs:items-start xs:absolute top-9 left-0 xs:w-full xs:bg-white xs:gap-5 xs:p-4 z-50 rounded-lg  ${
          show ? 'xs:flex' : 'xs:hidden'
        }`}
      >
        <div className="flex-1">
          <nav className="flex justify-center">
            <ul className="flex xs:flex-col xs:w-full sm:gap-12 gap-3">
              <li>
                <a
                  href="#"
                  className="text-[#344767] duration-150 hover:text-primary-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#344767] duration-150 hover:text-primary-100"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#344767] duration-150 hover:text-primary-100"
                >
                  Contact Us
                </a>
              </li>
              <li className="flex items-center gap-1 ">
                <a
                  href="#"
                  className="text-[#344767] duration-150 hover:text-primary-100"
                >
                  Affiliate
                </a>
                <DropdownIcon className="stroke-[#344767] scale-75" />
              </li>
            </ul>
          </nav>
          <div className="flex gap-2 sm:hidden xs:mt-5">
            <a
              href="#"
              className="px-8 py-2 bg-secondary-100 text-white rounded-xl"
            >
              Login
            </a>
            <a
              href="#"
              className="text-[#344767] font-semibold px-5 py-2 border border-[#344767] rounded-xl"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="flex items-center sm:gap-6">
          <div className="flex gap-2 xs:hidden">
            <a
              href="#"
              className="sm:px-8 py-1 bg-secondary-100 text-white rounded-xl"
            >
              Login
            </a>
            <a
              href="#"
              className="text-[#344767] font-semibold sm:px-5 py-1 border border-[#344767] rounded-xl"
            >
              Sign Up
            </a>
          </div>
          <div className="flex items-center gap-1">
            <button className="!text-[#344767]" onClick={changeLanguageFun}>
              اللغة العربية
            </button>
            <DropdownIcon className="stroke-[#344767] scale-75" />
          </div>
        </div>
      </div>
      <button className="sm:hidden" onClick={showMenu}>
        <Bars />
      </button>
    </header>
  )
}

export default Header
