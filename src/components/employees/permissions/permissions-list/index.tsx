import useSSR from 'hooks/useSSR'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent } from 'react'
import { Text } from 'ui'
import Select, { Options } from 'ui/select'
import Toggle from 'ui/toggle'

export interface PermissionCardProps {
  name: string
  id: string
  icon: SVGElement | any
  currentAccess: string
  status: boolean
  handleChangeStatus: (e: ChangeEvent) => void
  handleChangeAccess: (e: unknown) => void
}
export interface PermissionListProps {
  list: PermissionCardProps[]
}

export default function PermissionList({ list }: PermissionListProps) {
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
    <tr>
      <td className="flex gap-2 items-center">
        {icon}
        <Text className="capitalize">{t(name)}</Text>
      </td>
      <td className="justify-center">
        <Toggle
          onChange={handleChangeStatus}
          checked={status}
          name={'status'}
        />
      </td>
      <td className="justify-center w-[15%]">
        <Select
          options={accessList}
          name={'access'}
          value={{ label: t(currentAccess) }}
          onChange={handleChangeAccess}
          components={{
            IndicatorSeparator: () => null
          }}
        />
      </td>
    </tr>
  )
  const { ssr } = useSSR()
  return ssr ? (
    <div className="sm:flex flex-col p-5 gap-5 dark:bg-dark-200 bg-white rounded-[10px] hidden">
      <Text className="!text-primary-100 font-bold">{t('permissions')}</Text>
      <div className="pt-5 flex justify-between  gap-5">
        <table className="table-auto w-full" cellPadding={11}>
          <thead className="border-b-[1px] border-dark-100">
            <tr>
              <th className="text-start">
                <Text>{t('section')}</Text>
              </th>
              <th>
                <Text className="capitalize">{t('status')}</Text>
              </th>
              <th>
                <Text className="capitalize">{t('action')}</Text>
              </th>
            </tr>
          </thead>
          <tbody className="before:p-10">
            {list.map((_item) => (
              <Card {..._item} key={_item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <></>
  )
}
