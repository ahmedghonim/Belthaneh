import React from 'react'
import { Dialog } from '@headlessui/react'
import CrossIcon from 'svg/x.svg'
import useTranslation from 'next-translate/useTranslation'

export interface ModalProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  className?: string
  header?: React.ReactNode
}
const EmptyModal = ({
  children,
  open,
  onClose,
  className = '',
  header
}: ModalProps) => {
  const { lang } = useTranslation()

  return (
    <Dialog open={open} onClose={onClose}>
      <div
        style={{ zIndex: 9999 }}
        className="fixed inset-0 flex justify-center items-center lg:p-20 md:p-8 sm:p-4"
      >
        <Dialog.Overlay className="fixed inset-0 bg-[#071512] bg-opacity-40" />

        <div
          className={`bg-[#fff] rounded-lg overflow-hidden relative z-10  sm:max-h-[730px] lg:w-3/4 w-full xs:h-[80vh]  dark:bg-dark-200 overflow-y-auto ${className}`}
        >
          <div className="flex p-5">
            <div className="ltr:left-1 rtl:right-1 absolute top-3 m-1 font-bold text-lg">
              {header}
            </div>

            <div
              className={`m-1 absolute ${
                lang === 'en' ? 'right-3' : 'left-3'
              } top-3`}
            >
              <button
                onClick={onClose}
                type="button"
                data-modal-toggle="defaultModal"
              >
                <CrossIcon className="fill-dark-200 dark:fill-white" />
              </button>
            </div>
          </div>
          <div className="px-14 py-8">{children}</div>
        </div>
      </div>
    </Dialog>
  )
}

export default EmptyModal
