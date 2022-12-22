import useSSR from 'hooks/useSSR'
import useTranslation from 'next-translate/useTranslation'
import { CheckBox, Text } from 'ui'
import Select, { Options } from 'ui/select'
import { PermissionCardProps, PermissionListProps } from '../permissions-list'

export default function PermissionListMobile({ list }: PermissionListProps) {
  const { t } = useTranslation('common')
  const accessList: Options[] = [
    {
      label: t('view'),
      value: 'view'
    },
    {
      label: t('full'),
      value: 'full'
    }
  ]

  const Card = ({
    name,
    icon,
    currentAccess,
    status,
    handleChangeStatus,
    handleChangeAccess
  }: PermissionCardProps) => (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <CheckBox
          onChange={handleChangeStatus}
          checked={status}
          name={'status'}
        />
        {icon}
        <Text className="capitalize">{t(name)}</Text>
      </div>
      <div className="justify-center w-1/3">
        <Select
          options={accessList}
          name={'access'}
          value={{ label: currentAccess }}
          onChange={handleChangeAccess}
          components={{
            IndicatorSeparator: () => null
          }}
        />
      </div>
    </div>
  )
  const { ssr } = useSSR()
  return ssr ? (
    <div className="sm:hidden flex flex-col w-full">
      <Text className="!text-primary-100 font-bold">{t('permissions')}</Text>
      <div className="flex flex-col gap-5 pt-5">
        {list.map((_item) => (
          <Card {..._item} key={_item.id} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}
