import { PackageCard } from 'components/common'
import Actions, { Props as ActionProps } from 'components/common/actions'
import { PackageCardProps } from 'components/common/package-card'
import PackageFormModal, {
  PackageFormModalProps
} from '../modals/package-form-modal'
import Navigation from '../navigation'

export interface PackagesData extends PackageCardProps, ActionProps {}
export interface PackagesProps {
  list: PackagesData[]
  handleAddPackage: () => void
  packageFormModalData: PackageFormModalProps
}
export default function Packages({
  list,
  handleAddPackage,
  packageFormModalData
}: PackagesProps) {
  return (
    <>
      <div className="space-y-5">
        <Navigation handleAddPackage={handleAddPackage} />
        <div className="flex flex-col sm:flex-row gap-4 w-full flex-wrap">
          {list?.map((_item) => (
            <div className="sm:w-[32%]" key={_item.id}>
              <PackageCard
                {..._item}
                actions={
                  <div className="ltr:right-0 rtl:left-0 absolute flex gap-0 bottom-0 dark:bg-white  px-[6px] py-[2px]  bg-secondary-100   ltr:rounded-tl-[15px] rtl:rounded-tr-[15px]  ltr:rounded-br-[10px] rtl:rounded-bl-[10px]  justify-around  ">
                    <Actions onDelete={_item.onDelete} onEdit={_item.onEdit} />
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
      <PackageFormModal {...packageFormModalData} />
    </>
  )
}
