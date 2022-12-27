import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className="w-fit flex items-center gap-3 [&:hover>.icon]:fill-secondary-100 hover:ltr:ml-4 hover:rtl:mr-4  duration-300">
      <span className="icon duration-200 text-lg text-white">✓</span>
      <span className="text-white">{text}</span>
    </li>
  )
}

function BenefitsList() {
  const { t } = useTranslation('common')
  return (
    <ul className="flex flex-col gap-2 mt-4 mb-14">
      <ListItem text={t('free_support')} />
      <ListItem text={t('reports')} />
      <ListItem text={t('free_update')} />
    </ul>
  )
}

export default BenefitsList
