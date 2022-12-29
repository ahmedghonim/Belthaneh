import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Modal, Select } from 'ui'
import { Options } from 'ui/select'

export interface QueueModalProps {
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

export default function QueueModal({ employees }: QueueModalProps) {
  const { t } = useTranslation('common')
  const { setFieldValue, values, setValues } = useFormikContext<{
    employee: Options | null
    open: boolean
    service: { id: string; name: string; img: string; price: number } | null
    serviceType: string | null
    services: ServiceFormData[]
    packages: ServiceFormData[]
    category?: string
  }>()
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
        service: null
      })
    }
  }
  return (
    <Modal open={values.open} onClose={onClose}>
      <div className="flex gap-5 flex-col h-40 pt-5 ">
        <Select
          options={employees}
          isForm
          name={'employee'}
          label={t('select_employee')}
          maxMenuHeight={70}
          className="w-[285px]"
          placeholder={t('select_employee')}
        />
        <div className="flex gap-4 justify-end mt-auto">
          <Button
            onClick={onClose}
            className={'dark:text-white text-dark-300 bg-transparent'}
          >
            {t('cancel')}
          </Button>
          <Button onClick={onAdd} primary>
            {t('add')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
