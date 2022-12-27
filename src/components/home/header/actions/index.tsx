import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import LangMod from 'components/main-layout/header/user-access/lang-mode'

function ActionsButtons() {
  const { t } = useTranslation('common')
  const { push } = useRouter()
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            void push('login')
          }}
          className="py-2 px-4 text-xs font-bold text-white rounded-lg bg-gradient-to-b from-[#3E3D45] to-[#202020] duration-200 hover:opacity-75 light-shadow"
        >
          {t('log_in')}
        </button>
        <button
          onClick={() => {
            void push('signup')
          }}
          className="py-2 px-4 text-xs font-bold text-[#344767] rounded-lg border border-[#344767] duration-200 hover:bg-secondary-100 hover:text-white hover:border-secondary-100 light-shadow"
        >
          {t('sign_up')}
        </button>
      </div>
      <LangMod />
    </div>
  )
}

export default ActionsButtons
