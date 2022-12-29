import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'

export default function InvoiceFooter() {
  const { t } = useTranslation('common')
  const { values } = useFormikContext<{
    subTotal: number
    tax: number
    total: number
    taxPercentage: number
  }>()
  return (
    <div className="flex flex-col gap-4 py-5">
      <div className="flex justify-between">
        <Text className=" !text-xs font-bold">{t('subtotal')}</Text>
        <Text className=" !text-[10px] font-bold">
          {values?.subTotal} {t('sar')}
        </Text>
      </div>
      <div className="flex justify-between">
        <Text className=" font-normal !text-[10px]">
          {t('tax')}({values?.taxPercentage}%)
        </Text>
        <Text className=" !text-[10px] font-bold">
          {values?.tax} {t('sar')}
        </Text>
      </div>
      <div className=" w-full  mt-[10px] border-dashed border-[1px] border-primary-100"></div>
      <Text className=" self-end !text-primary-100 !text-[10px]">
        {values?.total} {t('sar')}
      </Text>
    </div>
  )
}
