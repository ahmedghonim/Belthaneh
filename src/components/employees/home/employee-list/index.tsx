import EmployeeCard, { EmployeeCardProps } from '../../../common/employee-card'

export interface EmployeeListProps {
  list: EmployeeCardProps[]
}

export default function EmployeeList({ list }: EmployeeListProps) {
  return (
    <div className="flex gap-4 sm:flex-row flex-col w-full flex-wrap">
      {list.map((_item) => (
        <div key={_item.id} className="sm:w-[24%] w-full">
          <div className="relative dark:bg-dark-200 bg-white rounded-[5px] pt-8 pb-3 px-[61px]">
            <EmployeeCard {..._item} />
          </div>
        </div>
      ))}
    </div>
  )
}
