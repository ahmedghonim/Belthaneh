import EmployeeForm from 'components/employees/home/add-employee-form'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

export default function AddEmployee() {
  const { t } = useTranslation('common')

  const data = {
    onSubmit: () => undefined,
    onCancel: () => undefined,
    initialValues: null,
    basicInfoData: {
      countries: [
        {
          label: 'Gaddah',
          value: '1'
        },
        {
          label: 'Madinah',
          value: '2'
        }
      ]
    }
  }
  return (
    <div>
      <Head>{t('add_employee')}</Head>
      <EmployeeForm {...data} />
    </div>
  )
}
