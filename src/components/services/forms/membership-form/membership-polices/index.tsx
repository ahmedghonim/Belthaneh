import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Text } from 'ui'
import Delete from 'svg/delete.svg'

export default function MembershipPolices() {
  const { t } = useTranslation('common')
  const { values, setFieldValue, setValues } = useFormikContext<{
    polices: Array<{
      policy: string
      id: string
    }>
    policy: string
  }>()

  const onClickDelete = (id: string) => {
    const newValues = values.polices.filter((_item) => _item.id !== id)
    setFieldValue('polices', newValues)
  }
  const onClickAdd = () => {
    const newValues = values.polices ?? []
    newValues.push({
      id: Math.random().toString(),
      policy: values.policy
    })
    setValues({ ...values, polices: newValues })
  }

  return (
    <>
      <div className={'sm:flex gap-4 w-full sm:flex-row flex-col pt-3'}>
        <Input
          isForm
          name="policy"
          label={t('policy')}
          placeholder={t('policy')}
        />{' '}
      </div>
      <div
        className={`flex ${
          values?.polices?.length > 0 ? 'justify-between' : 'justify-end'
        }  sm:mt-9 mt-4`}
      >
        <div className="flex flex-col">
          {values?.polices?.map((_item) => (
            <div className="flex gap-1 items-center" key={_item?.id}>
              <Button
                onClick={() => onClickDelete(_item?.id)}
                className="bg-transparent"
              >
                <Delete className="fill-secondary-100" />
              </Button>
              <Text size={'xs'} className="font-semibold">
                {_item?.policy}{' '}
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
