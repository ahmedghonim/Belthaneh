import { useFormikContext } from 'formik'
import React from 'react'
import { Button, Input, Select, Text } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import Plus from 'svg/plus-square.svg'
import Delete from 'svg/delete.svg'
import { Options } from 'ui/select'

export interface InventoryProps {
  inventories: Options[]
  measures: Options[]
}

export default function InventoryForm({
  measures,
  inventories
}: InventoryProps) {
  const { t } = useTranslation('common')
  const { values, setFieldValue } = useFormikContext<{
    inventories: Array<{
      id: string
      inventory?: Options
      amount: number
      measure?: Options
    }>
    measure?: Options
    inventory?: Options
    amount: number
  }>()
  const onClickAdd = () => {
    const newValues = values.inventories ?? []
    newValues.push({
      id: Math.random().toString(),
      inventory: values.inventory,
      amount: values.amount,
      measure: values.measure
    })
    setFieldValue('services', newValues)
  }
  const onClickDelete = (id: string) => {
    const newValues = values.inventories?.filter((_item) => _item.id !== id)
    void setFieldValue('inventories', newValues)
  }
  return (
    <>
      <div className="flex gap-4 items-center sm:flex-row flex-col">
        <Select
          isForm
          name={'inventory'}
          options={inventories}
          label={t('inventory')}
          placeholder={t('inventory')}
          onChange={(option) => {
            void setFieldValue('inventory', option)
          }}
        />
        <div className="flex w-full sm:gap-5 gap-4 flex-row">
          <Input isForm name={'amount'} label={t('amount')} type="number" />
          <Select
            isForm
            name={'measure'}
            options={measures ?? []}
            label={t('measure')}
            placeholder={t('select_measure')}
            onChange={(option) => {
              void setFieldValue('measure', option)
            }}
          />
          <Button
            primary
            className={'self-end'}
            onClick={onClickAdd}
            disabled={values.inventory === null || values.measure === null}
          >
            <Plus />
            {t('add')}
          </Button>
        </div>
      </div>
      {values.inventories.map((_item) => (
        <div key={_item.id} className="flex gap-1 items-center">
          <Button
            onClick={() => onClickDelete(_item.id)}
            className="bg-transparent"
          >
            <Delete className="fill-secondary-100" />
          </Button>
          <div key={_item?.id} className="flex gap-4 items-center">
            <Text>
              {t('inventory')} : {_item.inventory?.label}{' '}
            </Text>
            <Text>
              {t('measure')} : {_item.measure?.label}{' '}
            </Text>
            <Text>
              {t('amount')} : {_item.amount}{' '}
            </Text>
          </div>
        </div>
      ))}
    </>
  )
}
