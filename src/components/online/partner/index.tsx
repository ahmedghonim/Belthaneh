import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Instagram from 'svg/instagram.svg'
import Website from 'svg/website.svg'
import PartnerCard from '../partner-card'

export default function Partner() {
  const { t } = useTranslation('common')
  const { push } = useRouter()

  const partnerList = [
    {
      icon: Instagram,
      title: t('instagram'),
      description: t('partner_instagram_msg'),
      onClick: () => {
        void push('/admin/online/instagram')
      },
      id: 1
    },
    {
      icon: Website,
      title: t('website'),
      description: t('partner_website_msg'),
      onClick: () => {
        void push('/admin/online/setting')
      },
      id: 2
    },
    {
      icon: Website,
      title: t('google'),
      description: t('partner_google_msg'),
      onClick: () => {
        void push('/admin/online/google')
      },
      id: 3
    }
  ]
  return (
    <div className="flex flex-col sm:flex-row gap-6 min-h-[177px]">
      {partnerList.map((_item) => (
        <div key={_item.id}>
          {' '}
          <PartnerCard {..._item} />
        </div>
      ))}
    </div>
  )
}
