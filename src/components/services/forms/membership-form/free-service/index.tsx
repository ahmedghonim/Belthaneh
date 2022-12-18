import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Select, Text } from 'ui'
import { Options } from 'ui/select'
import Delete from 'svg/delete.svg'

export default function FreeServiceForm({ services }: { services: Options[] }) {
  const { t } = useTranslation('common')
  const { values, setFieldValue, setValues } = useFormikContext<{
    freeServices: Array<{ service: Options; quantity: number; id: string }>
    freeService: { service: Options; quantity: number; id: string }
  }>()

  const onClickDelete = (id: string) => {
    const newValues = values.freeServices.filter((_item) => _item.id !== id)
    setFieldValue('freeServices', newValues)
  }
  const onClickAdd = () => {
    const newValues = values.freeServices ?? []
    newValues.push({
      id: Math.random().toString(),
      service: values.freeService.service,
      quantity: values.freeService.quantity
    })
    setValues({ ...values, freeServices: newValues })
  }

  return (
    <>
      <div className="w-full flex  sm:flex-row flex-col sm:gap-4 gap-5 ">
        <div className="sm:w-[75%]">
          <Select
            name={'freeService.service'}
            label={t('select_service')}
            placeholder={t('select_service')}
            options={services}
            onChange={(option) => {
              void setFieldValue('freeService.service', option)
            }}
          />
        </div>
        <div className="sm:w-[25%]">
          <Input
            type="number"
            isForm
            name="freeService.quantity"
            label={t('Quantity')}
            placeholder={t('Quantity')}
          />{' '}
        </div>
      </div>
      <div
        className={`flex ${
          values?.freeServices.length > 0 ? 'justify-between' : 'justify-end'
        }  sm:mt-9 mt-4`}
      >
        <div className="flex flex-col">
          {values?.freeServices.map((_item) => (
            <div className="flex gap-1 items-center" key={_item?.id}>
              <Button
                onClick={() => onClickDelete(_item?.id)}
                className="bg-transparent"
              >
                <Delete className="fill-secondary-100" />
              </Button>
              <Text size={'xs'} className="font-semibold">
                {_item?.service?.label} {t('free')} {_item?.quantity}{' '}
                {t('times')}
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
