import EmployeeForm from 'components/employees/home/add-employee-form'

export default function EditEmployee() {
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
      <EmployeeForm {...data} />
    </div>
  )
}
