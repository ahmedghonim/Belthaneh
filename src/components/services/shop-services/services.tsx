import Actions, { Props as ActionProps } from 'components/common/actions'
import ServicesCard, { ServiceCardProps } from 'components/common/service-card'

export interface ServicesData extends ServiceCardProps, ActionProps {}
export interface ServicesProps {
  list: ServicesData[]
}
export default function Services({ list }: ServicesProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap sm:pt-10 pt-5">
      {list?.map((_item) => (
        <div key={_item.id} className="sm:w-[32%]">
          <ServicesCard
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
  )
}
