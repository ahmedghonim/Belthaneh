import EmployeeHome from 'components/employees/home'
import { employees } from 'components/employees/home/employee-list/index.mock'
import { useRouter } from 'next/router'

export default function Employees() {
  const { push } = useRouter()
  const statisticsData = {
    totalEmployees: 20,
    totalEmployeesTitle: '20% per october',
    topEmployees: 20,
    topEmployeesTitle: '20% per october',
    newEmployees: 20,
    newEmployeesTitle: '20% per october'
  }
  const employeeHeaderActionData = {
    handleSearch: (e: any) => undefined,
    handleAddNewEmployee: () => {
      void push('/admin/employee/add-employee')
    },
    onClickSearch: () => undefined
  }
  const formattedEmployees = employees.map((_item) => {
    return {
      ..._item,
      handleEdit: () => {
        void push(`/admin/employee/${_item.id}/edit-employee/`)
      },
      handleViewProfile: () => {
        void push(`/admin/employee/${_item.id}`)
      }
    }
  })

  return (
    <>
      <EmployeeHome
        statisticsData={statisticsData}
        employees={formattedEmployees}
        employeeHeaderActionData={employeeHeaderActionData}
      />
    </>
  )
}
