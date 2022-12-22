import EmployeeHeaderAction, {
  EmployeeHeaderActionProps
} from './employee-header-action'
import EmployeeList, { EmployeeListProps } from './employee-list'
import Statistics, { StatisticsProps } from './statistic-list'

interface EmployeeHomeProps {
  statisticsData: StatisticsProps
  employees: EmployeeListProps['list']
  employeeHeaderActionData: EmployeeHeaderActionProps
}

export default function EmployeeHome({
  statisticsData,
  employees,
  employeeHeaderActionData
}: EmployeeHomeProps) {
  return (
    <div className="flex flex-col gap-5 relative">
      <Statistics {...statisticsData} />
      <EmployeeHeaderAction {...employeeHeaderActionData} />
      <EmployeeList list={employees} />
    </div>
  )
}
