import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Select, Text } from 'ui'
import { Options } from 'ui/select'
import Delete from 'svg/delete.svg'

export default function DiscountServiceForm({
  services
}: {
  services: Options[]
}) {
  const { t } = useTranslation('common')

  const { values, setFieldValue, setValues } = useFormikContext<{
    discountServices: Array<{
      service: Options
      quantity: number
      id: string
      discount: number
    }>
    discountService: {
      service: Options
      quantity: number
      id: string
      discount: number
    }
  }>()

  const onClickDelete = (id: string) => {
    const newValues = values.discountServices.filter((_item) => _item.id !== id)
    setFieldValue('discountServices', newValues)
  }
  const onClickAdd = () => {
    const newValues = values.discountServices ?? []
    newValues.push({
      id: Math.random().toString(),
      service: values.discountService.service,
      quantity: values.discountService.quantity,
      discount: values.discountService.discount
    })
    setValues({ ...values, discountServices: newValues })
  }

  return (
    <>
      <div className={'flex gap-4 w-full sm:flex-row flex-col'}>
        <div className="sm:w-[50%] flex w-full">
          <Select
            name={'discountService.service'}
            label={t('select_service')}
            placeholder={t('select_service')}
            options={services}
            onChange={(option) => {
              void setFieldValue('discountService.service', option)
            }}
          />
        </div>
        <div className="flex sm:w-[50%] w-full gap-4">
          <Input
            type="number"
            isForm
            name="discountService.discount"
            label={t('discount')}
            placeholder={t('discount')}
          />{' '}
          <Input
            type="number"
            isForm
            name="discountService.quantity"
            label={t('Quantity')}
            placeholder={t('Quantity')}
          />{' '}
        </div>
      </div>
      <div
        className={`flex ${
          values?.discountServices?.length > 0
            ? 'justify-between'
            : 'justify-end'
        }  mt-9`}
      >
        <div className="flex flex-col">
          {values?.discountServices.map((_item) => (
            <div className="flex gap-1 items-center" key={_item?.id}>
              <Button
                onClick={() => onClickDelete(_item?.id)}
                className="bg-transparent"
              >
                <Delete className="fill-secondary-100" />
              </Button>
              <Text size={'xs'} className="font-semibold">
                {_item?.discount}% {_item?.service?.label}{' '}
                {t('discount').toLowerCase()} {_item?.quantity} {t('times')}
              </Text>
            </div>
          ))}
        </div>
        <Button className={'px-5 self-end'} primary onClick={onClickAdd}>
          {t('add')}
        </Button>
      </div>
    </>
  )
}
