import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import DropdownIcon from 'svg/arrow.svg'

function Navbar() {
  const { t } = useTranslation('common')

  return (
    <nav className="flex-1 justify-center">
      <ul className="flex items-center justify-center gap-12">
        <ListItem href="/" linkName={t('home')} />
        <ListItem href="/pricing" linkName={t('pricing')} />
        <ListItem href="/contact-us" linkName={t('contact_us')} />
        <ListItem
          href="/affiliate"
          linkName={t('affiliate')}
          icon={<DropdownIcon />}
        />
      </ul>
    </nav>
  )
}

const ListItem = ({
  href,
  linkName,
  icon = ''
}: {
  linkName: string
  href: string
  icon?: any
}) => {
  return (
    <li className="text-[#344767] text-sm duration-200 hover:!text-secondary-100 flex items-center gap-1">
      <Link href={href}>{linkName}</Link>
      {icon !== undefined ? <span>{icon}</span> : ''}
    </li>
  )
}
export default Navbar
