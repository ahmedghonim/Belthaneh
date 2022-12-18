import useTranslation from 'next-translate/useTranslation'
import Memberships from 'components/services/shop-memberships'
import { memberships } from 'components/services/shop-memberships/index.mock'
import Head from 'next/head'
import { useRouter } from 'next/router'

function ShopMembershipsController() {
  const { push, pathname } = useRouter()
  const { t } = useTranslation('common')
  const cards = [
    {
      id: '1',
      title: t('expired'),
      total: 20
    },
    {
      id: '1',
      title: t('Active'),
      total: 20
    }
  ]
  const adapterMemberships = memberships.map((_item) => ({
    ..._item,
    onClickView: () => {
      void push(`${pathname}/${_item.id}`)
    },
    onEdit: () => {
      void push(`${pathname}/edit-membership/${_item.id}`)
    }
  }))
  const handleAddMembership = () => {
    void push(`${pathname}/create-membership`)
  }

  return (
    <>
      <Head>
        <title>{t('memberships')}</title>
      </Head>
      <Memberships
        list={adapterMemberships}
        cards={cards}
        handleAddMember={handleAddMembership}
      />
    </>
  )
}

export default ShopMembershipsController
