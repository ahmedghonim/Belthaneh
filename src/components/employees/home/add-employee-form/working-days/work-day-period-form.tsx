import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import { Button, DateInput } from 'ui'

export interface WorkDayPeriodFormProps {
  onCancel: () => void
  onAdd: () => void
}

export default function WorkDayPeriodForm({
  onCancel,
  onAdd
}: WorkDayPeriodFormProps) {
  const { t } = useTranslation('common')
  const [value, setValue] = useState<string | null | undefined>()
  const { values, setValues } = useFormikContext<{
    from: string
    to: string
  }>()
  return (
    <div className="flex flex-col gap-5 sm:w-[419px]">
      <DateInput
        onClose={() => {
          if (value !== '') {
            setValues({
              ...values,
              from: value ?? ''
            })
          }
          setValue(null)
        }}
        placeholder={t('attendant_time')}
        disableDayPicker
        name={'from'}
        label={t('attendant_time')}
        isForm
        format="HH:mm A"
        plugins={[
          <TimePicker key={'attendant_time'} format="HH:mm A" hideSeconds />
        ]}
        onChange={(selectedDates) => {
          setValue(selectedDates?.toString())
        }}
      />
      <DateInput
        disableDayPicker
        onClose={() => {
          if (value !== '') {
            setValues({
              ...values,
              to: value ?? ''
            })
          }
          setValue(null)
        }}
        placeholder={t('leaving_time')}
        name={'to'}
        label={t('leaving_time')}
        isForm
        format="HH:mm A"
        plugins={[
          <TimePicker format="HH:mm A" key={'leaving_time'} hideSeconds />
        ]}
        onChange={(selectedDates) => {
          setValue(selectedDates?.toString())
        }}
      />
      <div className="flex gap-4 self-end pt-14">
        <Button className={'bg-transparent'} onClick={onCancel}>
          {t('cancel')}
        </Button>
        <Button primary onClick={onAdd}>
          {t('save')}
        </Button>
      </div>
    </div>
  )
}
