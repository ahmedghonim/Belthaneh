import useTranslation from 'next-translate/useTranslation'
import { Button, Text } from 'ui'
import { WorkingDay } from 'components/employees/home/add-employee-form'
import Toggle from 'ui/toggle'
import { useFormikContext } from 'formik'
import Calendar from 'svg/calendar.svg'
import Plus from 'svg/plus.svg'
import WorkDayPeriodModal from './modal'

export default function WorkingDays() {
  const { t } = useTranslation('common')
  const { values, setFieldValue, setValues } = useFormikContext<{
    work_days: WorkingDay
    from: string
    to: string
    open: boolean
    day: string
  }>()

  const days = [
    { id: 1, day: 'saturday' },
    { id: 2, day: 'sunday' },
    { id: 3, day: 'monday' },
    { id: 4, day: 'tuesday' },
    { id: 5, day: 'wednesday' },
    { id: 6, day: 'thursday' },
    { id: 7, day: 'friday' }
  ]
  const handleOpenModal = (day: string) => {
    setValues({
      ...values,
      day,
      open: true,
      from: '',
      to: ''
    })
  }
  const handleClose = () => {
    setValues({
      ...values,
      open: false,
      from: '',
      to: ''
    })
  }
  const handleAdd = () => {
    const newPeriods = values?.work_days?.[values.day].periods ?? []
    newPeriods.push({
      from: values.from,
      to: values.to,
      id: newPeriods.length.toString()
    })
    const newWorkDays = {
      ...values?.work_days,
      [values.day]: {
        active: values?.work_days?.[values.day].active,
        periods: newPeriods
      }
    }
    setValues({
      ...values,
      work_days: newWorkDays,
      open: false,
      from: '',
      to: ''
    })
  }

  const Card = ({ day = 'saturday' }: { day: string }) => (
    <div className="relative">
      <div className=" flex flex-col  dark:bg-dark-200 bg-white rounded-[10px]  items-center px-3 py-4">
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <Calendar />
            <Text className="capitalize">{t(day)}</Text>
          </div>
          <Toggle
            name={'active'}
            checked={values?.work_days?.[day]?.active}
            onChange={() => {
              setFieldValue(
                `work_days.${day}.active`,
                !values?.work_days?.[day]?.active
              )
            }}
          />
        </div>
        {values?.work_days?.[day]?.active && (
          <div
            className={`flex flex-col min-h-16 ${
              values?.work_days?.[day]?.periods?.length > 0 ? 'my-5' : ''
            } self-start`}
          >
            {values?.work_days?.[day]?.periods?.map((_item) => (
              <Text key={_item.id}>
                {_item.from} {' - '} {_item.to}
              </Text>
            ))}
          </div>
        )}
      </div>

      {values?.work_days?.[day]?.active && (
        <Button
          primary
          onClick={() => handleOpenModal(day)}
          className={
            'absolute bottom-0 justify-center left-0 right-0  w-full rounded-t-[0px]'
          }
        >
          <Plus />
          {t('add_period')}
        </Button>
      )}
      <WorkDayPeriodModal
        open={values.open}
        onClose={handleClose}
        key={day}
        formPros={{
          onAdd: handleAdd,
          onCancel: handleClose
        }}
      />
    </div>
  )
  return (
    <div className="flex flex-col gap-4">
      {days.map((_item) => (
        <Card day={_item.day} key={_item.id} />
      ))}
    </div>
  )
}
