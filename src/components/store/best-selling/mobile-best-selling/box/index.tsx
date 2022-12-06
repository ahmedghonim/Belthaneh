import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import DetailsBox from 'ui/details-box'
import { BestSellingType } from 'components/store'

function BestSellingBox({
  productName,
  sold,
  pricing = 0,
  status
}: BestSellingType) {
  const { t } = useTranslation('common')

  return (
    <section className="dark:bg-dark-200 bg-white rounded-md overflow-hidden">
      <div className="dark:bg-[#40414936] bg-[#D4D6D9] flex justify-between text-sm p-3">
        <p className=" dark:text-white text-dark-100 dark:font-medium font-bold ">
          {t('Product_Name')}
        </p>
        <p className="font-light dark:text-light-100 text-dark-200">
          {productName}
        </p>
      </div>

      <ul className="flex flex-col gap-4 px-3 py-5">
        <DetailsBox withLabel={true} labelType={t('sold')} text={sold} />
        <DetailsBox withLabel={true} labelType={t('price')} text={pricing} />
        <DetailsBox
          withLabel={true}
          labelType={t('status')}
          text={`${status === true ? t('available') : t('out_of_stock')}`}
          textStyling={`${
            status === true ? 'text-[#18701C]' : 'text-[#FD483C]'
          }`}
        />
      </ul>
    </section>
  )
}

export default BestSellingBox
