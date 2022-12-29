import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import { Button, DateInput, Modal, Select } from 'ui'
import { Options } from 'ui/select'

export interface BookingModalProps {
  employees: Options[]
}
interface ServiceFormData {
  service: {
    id: string
    name: string
    img: string
    price: number
  } | null
  employee: Options | null
  date: Date | null
  qty: number
  category: string | null
}

interface FormValues {
  employee: Options | null
  open: boolean
  service: { id: string; name: string; img: string; price: number } | null
  date: Date | null
  serviceType: string | null
  services: ServiceFormData[]
  packages: ServiceFormData[]
  category?: string
}

export default function BookingModal({ employees }: BookingModalProps) {
  const { t } = useTranslation('common')
  const { setFieldValue, values, setValues } = useFormikContext<
    ServiceFormData[] & FormValues
  >()
  const onClose = () => {
    setFieldValue('open', false)
  }
  const onAdd = () => {
    if (values.serviceType !== null) {
      const serviceName =
        values.serviceType === 'services' ? 'services' : 'packages'

      const newServices: Array<Partial<ServiceFormData>> = values[
        serviceName
      ]?.map?.((_item) => {
        if (_item?.service?.id === values?.service?.id) {
          _item.qty++
        }
        return _item
      })
      if (
        values[serviceName].find(
          (o) => o?.service?.id === values.service?.id
        ) == null
      ) {
        const newService: Partial<ServiceFormData> = {
          service: values.service,
          employee: values.employee,
          qty: 1,
          date: values.date ?? new Date(),
          category: values?.category ?? ''
        }
        if (
          newService?.category === '' ||
          values?.category == null ||
          values.serviceType !== 'services'
        ) {
          delete newService?.category
        }
        newServices.push(newService)
      }

      setValues({
        ...values,
        [serviceName]: newServices,
        open: false,
        employee: null,
        service: null,
        date: null
      })
    }
  }
  return (
    <Modal open={values.open} onClose={onClose}>
      <div className="flex gap-5 flex-col h-72 pt-5">
        <Select
          options={employees}
          onChange={(option) => {
            void setFieldValue('employee', option)
          }}
          value={values.employee}
          name={'employee'}
          label={t('employee')}
          className="w-[285px]"
          maxMenuHeight={120}
          placeholder={t('select_employee')}
        />
        <DateInput
          label={t('time')}
          format="DD/MM/YYYY HH:mm"
          plugins={[
            <TimePicker
              position="bottom"
              style={{ minWidth: '257px' }}
              key={'date_time'}
            />
          ]}
          isForm
          name={'date'}
          placeholder={t('time')}
        />
        <div className="flex gap-4 justify-end mt-auto">
          <Button
            onClick={onClose}
            className={'dark:text-white text-dark-300 bg-transparent'}
          >
            {t('cancel')}
          </Button>
          <Button onClick={onAdd} primary disabled={values.employee === null}>
            {t('add')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
