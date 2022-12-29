import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import MembershipView from 'components/services/shop-memberships/membership-view'
import data from 'components/services/shop-memberships/membership-view/index.mock'
import { memberships } from 'components/services/shop-memberships/index.mock'
import { useRouter } from 'next/router'

function MembershipViewController() {
  const { t } = useTranslation('common')
  const { query } = useRouter()
  const currentMembership = memberships.find((_item) => _item.id === query.id)

  return (
    <>
      <Head>
        <title>
          {t('memberships')}/{currentMembership?.title}
        </title>
      </Head>
      <MembershipView list={data} />
    </>
  )
}

export default MembershipViewController
