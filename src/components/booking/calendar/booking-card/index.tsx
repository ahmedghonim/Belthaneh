import { cva } from 'class-variance-authority'
import Actions from 'components/common/actions'

type Status = 'paid' | 'notPaid' | 'fromApp'

export interface KeyLabelItem {
  value: string
  label: string
}

interface BookingCardProps {
  title?: string
  services?: KeyLabelItem[]
  user?: KeyLabelItem
  phone?: string
  status?: Status
  handleEdit: () => void
  handleDelete: () => void
}

const bgClasses = cva('relative h-full rounded-[15px]', {
  variants: {
    status: {
      paid: 'bg-primary-100',
      notPaid: 'bg-secondary-100',
      fromApp: 'bg-dark-600'
    }
  },
  defaultVariants: {
    status: 'notPaid'
  }
})
const EventCard = ({
  status,
  children
}: {
  status: Status
  children?: React.ReactNode
}) => <div className={bgClasses({ status })}>{children}</div>

export default function BookingCard({
  status = 'notPaid',
  title,
  services,
  user,
  phone,
  handleEdit,
  handleDelete
}: BookingCardProps) {
  const Body = () => (
    <div className="flex flex-col gap-1 p-2 items-start">
      <span
        className={`text-xs text-white font-semibold ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {title}
      </span>
      <span
        className={`text-xs text-white font-semibold  ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {services?.map((_item) => _item.label)?.join(',')}
      </span>
      <span
        className={`text-xs text-white font-semibold  ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {user?.label}
      </span>
      <span
        className={`text-xs text-white font-semibold  ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {phone}
      </span>
    </div>
  )

  return (
    <EventCard status={status}>
      <div className="absolute flex gap-1 bg-white bg-opacity-80 p-1  ltr:right-[-2px] rtl:left-[-2px]  ltr:rounded-tr-[15px] rtl:rounded-tl-[15px] ltr:rounded-bl-[30px] rtl:rounded-br-[30px]  ">
        <Actions
          onDelete={handleDelete}
          onEdit={handleEdit}
          className="stroke-secondary-100"
        />
      </div>
      <Body />
    </EventCard>
  )
}
