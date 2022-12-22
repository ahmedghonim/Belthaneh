import CommissionsComponent, {
  CommissionProps
} from 'components/employees/commissions'
import { commissions } from 'components/employees/commissions/commission-table/index.mock'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
export default function Permissions() {
  const { t } = useTranslation('common')

  const data: CommissionProps = {
    commissionCards: {
      overtime: 10,
      services: 30,
      sellProducts: 40
    },
    tableData: { list: commissions }
  }
  return (
    <div>
      <Head>{t('commissions')}</Head>
      <CommissionsComponent {...data} />
    </div>
  )
}
