import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Actions from 'components/reports/action-lines'
import { mockList } from 'components/reports/action-lines/mock'
export default function ActionLines() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('reports_action-lines')}</title>
      </Head>
      <Actions items={mockList} />
    </>
  )
}
