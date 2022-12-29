import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import DropdownIcon from 'svg/arrow.svg'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const LangMod = dynamic(
  async () =>
    await import('components/main-layout/header/user-access/lang-mode'),
  { ssr: false }
)

function ActionsButtons() {
  const { t } = useTranslation('common')

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Link
          href="login"
          className="py-2 px-4 text-xs text-center font-bold text-white rounded-lg bg-gradient-to-b from-[#3E3D45] to-[#202020] w-[80px] duration-200 hover:opacity-75 light-shadow"
        >
          {t('log_in')}
        </Link>
        <Link
          href="signup"
          className="py-2 px-4 text-xs text-center font-bold text-[#344767] rounded-lg border border-[#344767] duration-200 hover:bg-secondary-100 hover:text-white hover:border-secondary-100 light-shadow"
        >
          {t('sign_up')}
        </Link>
      </div>
      <button className="text-[#344767] flex !items-center justify-start gap-1">
        <span>{t('arabic_lang')}</span>
        <LangMod icon={<DropdownIcon />} />
      </button>
    </div>
  )
}

export default ActionsButtons
