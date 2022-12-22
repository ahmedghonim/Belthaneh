import SideMenu from 'components/employees/side-menu'
import EmployeeCard, {
  EmployeeCardProps
} from 'components/common/employee-card'

export interface EmployeeLayoutProps {
  employeeCardData: EmployeeCardProps
  children: any
}
function EmployeeLayout({ employeeCardData, children }: EmployeeLayoutProps) {
  return (
    <section className="flex justify-between xs:flex-col xs:gap-4 items-start">
      <div className="sm:!w-[20%] w-full flex flex-col gap-4">
        <div className="dark:bg-dark-200 bg-white rounded-lg pt-8 pb-16">
          <EmployeeCard {...employeeCardData} />
        </div>
        <div className="dark:bg-dark-200 bg-white sm:rounded-lg rounded-[30px]  p-2 sm:!p-4">
          <SideMenu />
        </div>
      </div>
      <div className="sm:!w-[78%] w-full sm:dark:bg-dark-200 sm:bg-white rounded-lg sm:!p-4">
        {children}
      </div>
    </section>
  )
}

export default EmployeeLayout
