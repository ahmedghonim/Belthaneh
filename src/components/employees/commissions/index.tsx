import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import CommissionList, { CommissionListProps } from './commission-list-card'
import CommissionListMobile from './commission-list-mobile'
import CommissionTable, { CommissionTableProps } from './commission-table'

export interface CommissionProps {
  commissionCards: CommissionListProps
  tableData: CommissionTableProps
}

export default function Commissions({
  commissionCards,
  tableData
}: CommissionProps) {
  const { t } = useTranslation('common')

  return (
    <div className="sm:dark:bg-dark-200 sm:bg-white rounded-[10px] flex flex-col justify-between sm:p-4 w-full">
      <Text className="!text-primary-100 font-bold">{t('commissions')}</Text>
      <div className="sm:pt-[42px] pt-4 ">
        <CommissionList {...commissionCards} />
      </div>
      <div className="sm:pt-[52px] sm:block hidden">
        <CommissionTable {...tableData} />
      </div>
      <div className="pt-8 sm:hidden block">
        <CommissionListMobile {...tableData} />
      </div>
    </div>
  )
}
