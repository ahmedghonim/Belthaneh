import { useFormikContext } from 'formik'
import moment from 'moment'
import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import { InvoiceFormValues } from '../../form-observe'
import { QRCodeSVG } from 'qrcode.react'

export default function InvoiceDetailsSummary() {
  const { t } = useTranslation('common')
  const { values } = useFormikContext<
    {
      openInvoiceDetails: boolean
    } & InvoiceFormValues
  >()
  const RowItem = ({
    start,
    center,
    end
  }: {
    start: string | number
    center?: string | number
    end: string
  }) => (
    <div className="flex justify-between">
      <Text size={'xs'} className="w-[30%]">
        {start}
      </Text>
      <Text size={'xs'} className="w-[40%] text-center">
        {center}
      </Text>
      <Text size={'xs'} className="w-[30%] text-end">
        {end}
      </Text>
    </div>
  )
  const allServices = [
    ...values.services,
    ...values.packages,
    ...values.memberships
  ]
  return (
    <div className="pt-3 flex flex-col gap-1 items-center xs:!bg-dark-200 w-full xs:!px-3 pb-2">
      <Text>{'salon name'}</Text>
      <Text>{'TRN: 85496549641964'}</Text>

      <div className="w-full pt-4">
        <RowItem end={t('فرع')} start={t('branch_en')} center={'branch name'} />
        <RowItem
          end={t('البائع')}
          start={t('seller_en')}
          center={'somia ali'}
        />
        <RowItem
          end={t('التاريخ')}
          start={t('date_en')}
          center={moment().format('DD/MM/YYYY HH:mm a')}
        />
        <RowItem
          end={t('رقم_الفاتورة')}
          start={t('invoice_en')}
          center={values.invoiceNumber}
        />
        <RowItem
          end={t('الاسم')}
          start={t('name_en')}
          center={values?.client?.label ?? values?.newClient?.name}
        />
        <RowItem
          end={t('الهاتف')}
          start={t('mobile_en')}
          center={values?.client?.value ?? values?.newClient?.phone}
        />
      </div>
      <div className="divider bg-dark-300 w-full h-[1px] m-0" />
      <div className="w-full">
        <RowItem start={t('السعر')} center={t('الكميه')} end={t('الوصف')} />
        <RowItem
          start={t('price_en')}
          center={t('qty_en')}
          end={t('description_en')}
        />
      </div>
      <div className="divider bg-dark-300 w-full h-[1px] m-0" />
      <div className="w-full">
        {allServices.map((_item) => (
          <RowItem
            key={_item.service?.id}
            start={_item.service?.price ?? 0}
            center={_item.qty ?? 0}
            end={_item?.service?.name ?? ''}
          />
        ))}
      </div>
      <div className="divider bg-dark-300 w-full h-[1px] m-0" />

      <div className="w-full">
        <RowItem
          end={t('المجموع')}
          start={t('subtotal_en')}
          center={values.subTotal}
        />
        <RowItem
          end={t('الخصم')}
          start={t('discount_en')}
          center={values.discount}
        />

        <RowItem
          end={t('ضريبه_القيمه')}
          start={t('vat_en')}
          center={values.tax}
        />
        <RowItem
          end={t('الاجمالي')}
          start={t('total_en')}
          center={values.total}
        />
        <RowItem end={t('فرع')} start={t('branch_en')} center={'branch name'} />
      </div>
      <div className="divider bg-dark-300 w-full h-[1px] m-0" />
      <div className="w-full">
        <RowItem end={t('طريقة_الدفع')} start={t('payment_method_en')} />
        <RowItem end={t('نقد')} start={t('cash_en')} center={values.cash} />
        <RowItem
          end={t('الإئتمان')}
          start={t('credit_en')}
          center={values.credit}
        />
        <div className="flex justify-center py-4">
          <QRCodeSVG
            value={'https://picturesofpeoplescanningqrcodes.tumblr.com/'}
            size={128}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            imageSettings={{
              src: 'https://picturesofpeoplescanningqrcodes.tumblr.com/',
              x: undefined,
              y: undefined,
              height: 24,
              width: 95,
              excavate: true
            }}
          />
        </div>
      </div>
      <div className="divider bg-dark-300 w-full h-[1px] m-0" />

      <div className="w-full">
        <RowItem end={t('الترتيب')} start={t('الموظف')} center={t('الخدمة')} />
        <RowItem
          end={t('queue_en')}
          start={t('employee_en')}
          center={t('service_en')}
        />
      </div>
      <div className="divider bg-dark-300 w-full h-[1px] m-0" />
    </div>
  )
}
