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
  wrapperClassName?: string
}
const EmptyModal = ({
  children,
  open,
  onClose,
  className = '',
  wrapperClassName = '',
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
          className={`bg-[#fff] rounded-lg overflow-hidden relative z-10  max-h-screen max-w-screen  dark:bg-dark-200 overflow-y-auto flex flex-col ${className}`}
        >
          {header !== undefined ? (
            <div className="py-5 ps-9 top-3 font-bold text-lg">{header}</div>
          ) : null}
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

          <div className={`sm:px-14 pb-8 px-6 ${wrapperClassName}`}>
            {children}
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default EmptyModal
