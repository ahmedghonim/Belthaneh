import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import StoreIcon from 'svg/cart.svg'
import Button from 'ui/button'
import { OpenProps } from '../../Types'

function WarshicStore({ open }: OpenProps) {
  const { t } = useTranslation('common')
  return (
    <div
      className={`bg-[#3B4450] flex flex-col items-center gap-2 p-3 rounded-full xs:hidden ${
        !open ? '!bg-transparent px-3 py-2' : ''
      }`}
    >
      <Button
        primary
        fullWidth
        size="small"
        center
        className={`font-semibold !rounded-full ${
          !open ? '!rounded-lg py-3' : ''
        }`}
      >
        <StoreIcon />
        {open && t('belthanih_store')}
      </Button>
    </div>
  )
}

export default WarshicStore
