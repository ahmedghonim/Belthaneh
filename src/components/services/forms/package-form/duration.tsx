import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Input } from 'ui'

export default function DurationForm() {
  const { t } = useTranslation('common')
  const { values, setFieldValue } = useFormikContext<{
    durationType: string
  }>()
  return (
    <div className="flex gap-8">
      <div className="flex gap-2 items-center">
        <label
          className={
            ' text-start block text-sm  text-dark-200 dark:text-white font-normal '
          }
        >
          {t('duration')}
        </label>
        <Input isForm name={'duration'} type="number" />
      </div>
      <div className="flex gap-4">
        <Button
          primary={values.durationType === 'day'}
          onClick={() => {
            setFieldValue('durationType', 'day')
          }}
          className={`${values.durationType !== 'day' ? 'bg-primary-300' : ''}`}
        >
          {t('day')}
        </Button>
        <Button
          primary={values.durationType === 'month'}
          className={`${
            values.durationType !== 'month' ? 'bg-primary-300' : ''
          }`}
          onClick={() => {
            setFieldValue('durationType', 'month')
          }}
        >
          {t('month')}
        </Button>
      </div>
    </div>
  )
}
