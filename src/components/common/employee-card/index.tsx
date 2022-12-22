import Actions from 'components/common/actions'
import Rating from 'components/common/rating'
import useTranslation from 'next-translate/useTranslation'
import { Button, Text } from 'ui'
import Avatar from 'ui/avatar'
import Logout from 'svg/logout.svg'

export interface EmployeeCardProps {
  name: string
  id: string
  rating: string | number
  img: string
  subTitle: string
  handleLeave?: () => void
  handleViewProfile?: () => void
  handleEdit?: () => void
  handleDelete?: () => void
  performance: string
  isAttendant: boolean
}

export default function EmployeeCard({
  name,
  rating,
  img,
  subTitle,
  handleLeave,
  handleViewProfile,
  handleEdit,
  handleDelete,
  performance,
  isAttendant
}: EmployeeCardProps) {
  const { t } = useTranslation('common')
  const getAvatarWithPerformance = () => {
    switch (performance) {
      case 'low':
        return (
          <div className="flex border-[5px] rounded-[50%] border-error-100 border-t-transparent  border-r-transparent border-l-transparent ">
            <Avatar src={img} className="h-16 w-16" />
          </div>
        )
      case 'med':
        return (
          <div className="flex border-[5px] rounded-[50%] border-warning-100 border-t-transparent">
            <Avatar src={img} className=" h-16 w-16" />
          </div>
        )
      case 'high':
        return (
          <div className="border-[5px] rounded-[50%] border-primary-100">
            <Avatar src={img} className=" h-16 w-16" />
          </div>
        )
      default: {
        return (
          <div className="flex border-[5px] rounded-[50%] border-error-100 border-t-transparent  border-r-transparent border-l-transparent ">
            <Avatar src={img} className="h-16 w-16 " />
          </div>
        )
      }
    }
  }
  return (
    <div className="flex flex-col items-center gap-3">
      {handleEdit !== undefined && handleDelete !== undefined && (
        <div className="ltr:right-0 rtl:left-0 absolute flex gap-0 top-0 dark:bg-white bg-secondary-100 px-[6px] py-[2px] ltr:rounded-tr-[10px] rtl:rounded-tl-[10px]  ltr:rounded-bl-[15px] rtl:rounded-br-[15px]  justify-around  ">
          <Actions onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      )}
      {getAvatarWithPerformance()}
      <div className="flex flex-col gap-1 items-center">
        <Text size={'md'} className="font-bold">
          {name}
        </Text>
        <Text className="text-[10px]">{subTitle}</Text>
      </div>
      <div className="pt-3">
        <Rating ratings={rating} />
      </div>
      {handleViewProfile !== undefined && (
        <Button
          primary
          onClick={handleViewProfile}
          className="rounded-3xl px-4 text-xs h-[25px]"
        >
          {t('view_profile')}
        </Button>
      )}

      {handleLeave !== undefined && (
        <Button
          secondary={isAttendant}
          secondaryBorder={!isAttendant}
          onClick={handleLeave}
          className="rounded-3xl px-4 text-xs h-[25px] !py-3"
        >
          {isAttendant ? (
            <Logout className="fill-white" />
          ) : (
            <Logout className="fill-secondary-100 rotate-180" />
          )}
          {isAttendant ? t('attendant') : t('leaving')}
        </Button>
      )}
    </div>
  )
}
