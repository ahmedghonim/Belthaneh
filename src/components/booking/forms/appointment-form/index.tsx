import { useState } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Button from 'ui/button'
import DateInputForm from 'ui/dateInput'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import Plus from 'svg/plus.svg'
import CustomerForm, {
  FormValuesCustomerForm
} from 'components/booking/forms/customer-form'
import CheckBox from 'ui/check-box'
import Select from 'ui/select'
import moment from 'moment'

interface FieldItem {
  value: string
  label: string
}

export interface FormValues {
  customer: FieldItem
  services: FieldItem[]
  employee: FieldItem
  date: Date | null | string
  newUser: FormValuesCustomerForm | null
}

export interface AppointmentFormProps {
  initialValues?: FormValues | null
  employees: FieldItem[]
  services: FieldItem[]
  customers: FieldItem[]
  onSubmit: (values: FormValues, helpers?: FormikHelpers<any>) => void
}

export const defaultValues = {
  customer: null,
  services: [],
  employee: null,
  date: undefined,
  newUser: null,
  send_sms: false
}

export default function AppointmentForm({
  initialValues,
  onSubmit,
  services,
  customers,
  employees
}: AppointmentFormProps) {
  const [openCreateCustomer, setOpenCreateCustomer] = useState(false)
  const { t } = useTranslation('common')
  const buttonName = t('confirm')
  const getServices = (serviceValues: FieldItem[]) => {
    return serviceValues.map((_item) => _item.label).join(',')
  }

  return (
    <Formik
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
    >
      {({
        values,
        setFieldValue
      }: { values: FormValues } & FormikHelpers<any>) => (
        <Form className="flex flex-col gap-4 text-center">
          <div className="flex gap-3">
            <Select
              onChange={(val) => setFieldValue('customer', val)}
              value={values.customer}
              name={'customer'}
              options={customers}
              className="w-full text-start"
              placeholder={t('select_customer')}
            />
            <Button
              onClick={() => setOpenCreateCustomer(!openCreateCustomer)}
              primary
              className={
                'sm:w-[160px] hidden sm:flex justify-center  items-center font-bold'
              }
            >
              {t('add_customer')}
              <Plus className="sm:hidden block" />
            </Button>
          </div>
          {openCreateCustomer && (
            <div className="w-full px-6 py-3">
              <CustomerForm
                onSubmit={() => undefined}
                handleCancel={() => setOpenCreateCustomer(false)}
              />
            </div>
          )}

          <Select
            onChange={(val) => setFieldValue('services', val)}
            value={values.services}
            options={services}
            name={'services'}
            className="w-full text-start"
            placeholder={t('select_services')}
            isMulti
          />
          <Select
            value={values.employee}
            onChange={(val) => setFieldValue('employee', val)}
            options={employees}
            name={'employee'}
            className="w-full text-start"
            placeholder={t('select_employee')}
          />
          <div className="text-start">
            <DateInputForm
              format="DD/MM/YYYY HH:mm"
              isForm
              plugins={[
                <TimePicker
                  position="bottom"
                  style={{ minWidth: '257px' }}
                  key={'date_time'}
                />
              ]}
              className={'sm:!w-[250px] w-full'}
              name="date"
              placeholder={t('date')}
            />
          </div>

          <span className="bg-primary-300 sm:bg-transparent p-4">
            {t('the')}
            <>{getServices(values?.services)}</>
            {t('services_reschedule_to')}{' '}
            <>{moment(values?.date)?.format('MM/DD/YYYY HH:mm:ss')}</>{' '}
            {t('with_employee')} <> {values.employee?.label}</>
          </span>

          <div className="sm:flex space-x-4 justify-end pt-8 ">
            <CheckBox label={t('sms_msg')} name={'send_sms'} isForm />
            <Button
              type="submit"
              primary
              className="font-bold py-2 px-4 xs:!mx-auto sm:mx-0"
            >
              {buttonName}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
