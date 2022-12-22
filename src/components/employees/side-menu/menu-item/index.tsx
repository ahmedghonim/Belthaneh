import { MenuListItemProps } from 'components/employees/side-menu/types'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const Icon = ({
  icon: Icon,
  isActive = false
}: {
  icon: React.ElementType
  isActive: boolean
}) => (
  <Icon
    className={isActive ? 'fill-secondary-100' : 'dark:fill-white fill-black'}
  />
)

function MenuListItem({ icon, href, isActive }: MenuListItemProps) {
  const { t } = useTranslation('common')
  const { query, push } = useRouter()
  const baseUrl = `/admin/employee/${query.id as string}/`
  const handleRoute = () => {
    void push(baseUrl + href)
  }
  return (
    <div
      className="flex gap-3 items-center cursor-pointer"
      onClick={handleRoute}
    >
      <Icon isActive={isActive} icon={icon} />
      <span className={isActive ? '!text-secondary-100' : '!dark:text-white'}>
        {t(href)}
      </span>
    </div>
  )
}

export default MenuListItem
