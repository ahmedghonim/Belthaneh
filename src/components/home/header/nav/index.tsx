import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import DropdownIcon from 'svg/arrow.svg'

function Navbar() {
  const { t } = useTranslation('common')

  const ListItem = ({
    linkName,
    icon = ''
  }: {
    linkName: string
    icon?: any
  }) => {
    return (
      <li className="text-[#344767] text-sm duration-200 hover:!text-secondary-100 flex items-center gap-1">
        <Link href="#">{linkName}</Link>
        {icon !== undefined ? <span>{icon}</span> : ''}
      </li>
    )
  }

  return (
    <nav className="flex-1 justify-center">
      <ul className="flex items-center justify-center gap-12">
        <ListItem linkName={t('home')} />
        <ListItem linkName={t('pricing')} />
        <ListItem linkName={t('contact_us')} />
        <ListItem linkName={t('affiliate')} icon={<DropdownIcon />} />
      </ul>
    </nav>
  )
}
export default Navbar
