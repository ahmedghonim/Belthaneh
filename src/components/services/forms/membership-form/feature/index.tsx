import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Text } from 'ui'
import Delete from 'svg/delete.svg'

export default function FeatureForm() {
  const { t } = useTranslation('common')
  const { values, setFieldValue, setValues } = useFormikContext<{
    features: Array<{
      feature: string
      id: string
    }>
    feature: string
  }>()

  const onClickDelete = (id: string) => {
    const newValues = values.features.filter((_item) => _item.id !== id)
    setFieldValue('features', newValues)
  }
  const onClickAdd = () => {
    const newValues = values.features ?? []
    newValues.push({
      id: Math.random().toString(),
      feature: values.feature
    })
    setValues({ ...values, features: newValues })
  }

  return (
    <>
      <div className={'sm:flex gap-4 w-full sm:flex-row flex-col pt-3'}>
        <Input
          isForm
          name="feature"
          label={t('feature')}
          placeholder={t('feature')}
        />{' '}
      </div>
      <div
        className={`flex ${
          values?.features?.length > 0 ? 'justify-between' : 'justify-end'
        }  sm:mt-9 mt-4`}
      >
        <div className="flex flex-col">
          {values?.features?.map((_item) => (
            <div className="flex gap-1 items-center" key={_item?.id}>
              <Button
                onClick={() => onClickDelete(_item?.id)}
                className="bg-transparent"
              >
                <Delete className="fill-secondary-100" />
              </Button>
              <Text size={'xs'} className="font-semibold">
                {_item?.feature}{' '}
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
