import { useFormikContext } from 'formik'
import React from 'react'
import { Button, Input, Select, Text } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import Delete from 'svg/trash.svg'
import { Options } from 'ui/select'
import { Counter } from 'components/common'

export interface ServiceFormProps {
  services: Options[]
}

export default function ServiceForm({ services }: ServiceFormProps) {
  const { t } = useTranslation('common')
  const { values, setFieldValue, setValues } = useFormikContext<{
    services: Array<{
      id: string
      service?: Options
      amount: number
      price: number
    }>
    service: Options
  }>()
  const onClickAdd = (option: Options) => {
    const newValues = values.services ?? []
    newValues.push({
      id: Math.random().toString(),
      service: option,
      amount: 0,
      price: 0
    })
    setValues({ ...values, services: newValues })
  }
  const onClickDelete = (id: string) => {
    const newValues = values.services?.filter((_item) => _item.id !== id)
    void setFieldValue('services', newValues)
  }
  const onAdd = (item: any) => {
    const newValues = values.services?.map((_item) => {
      if (_item.id === item.id) {
        _item.amount = _item.amount + 1
      }
      return _item
    })
    void setFieldValue('services', newValues)
  }
  const onRemove = (item: any) => {
    const newValues = values.services?.map((_item) => {
      if (_item.id === item.id && _item.amount !== 0) {
        _item.amount = _item.amount - 1
      }
      return _item
    })
    void setFieldValue('services', newValues)
  }
  return (
    <div className="flex gap-5 items-center flex-col w-full">
      <Select
        isForm
        name={'service'}
        options={services}
        label={t('service')}
        placeholder={t('service')}
        onChange={(option) => {
          onClickAdd(option as Options)
        }}
      />
      {values.services?.map((_item, index) => (
        <div
          key={_item.id}
          className="flex gap-1 items-center w-full justify-between"
        >
          <div
            key={_item?.id}
            className="flex gap-4 items-center justify-between w-full flex-wrap"
          >
            <Text>{_item.service?.label} </Text>
            <div className="flex gap-8">
              <Text>{t('qty')} </Text>
              <Counter
                value={_item.amount}
                onAdd={() => onAdd(_item)}
                onRemove={() => onRemove(_item)}
              />
            </div>
            <div className="flex gap-4 justify-between xs:w-full">
              <div className="flex gap-2 w-full items-center">
                <label
                  className={
                    ' text-start block text-sm  text-dark-200 dark:text-white font-normal '
                  }
                >
                  {t('pricing')}
                </label>
                <Input isForm name={`services.${index}.price`} type="number" />
              </div>
              <Button
                onClick={() => onClickDelete(_item.id)}
                className="bg-transparent"
              >
                <Delete className="stroke-secondary-100" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
