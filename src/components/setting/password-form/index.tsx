import React from 'react'
import Input from 'ui/input'
import Password from 'svg/password.svg'
import Button from 'ui/button'
import useTranslation from 'next-translate/useTranslation'
import { useFormikContext } from 'formik'

export default function PasswordForm() {
  const { t } = useTranslation('common')
  const { submitForm } = useFormikContext()

  return (
    <div className="flex flex-col gap-5 flex-1 rounded-lg shadow-lg bg-white dark:bg-dark-200 p-4 pb-14">
      <div className="flex items-center gap-3">
        <Password className="sm:hidden" />
        <span className="text-base dark:text-white text-dark-300 font-bold">
          {' '}
          {t('password')}
        </span>
      </div>

      <Input
        isForm
        type="password"
        name="password"
        placeholder={t('current_password')}
      />
      <Input
        isForm
        type="password"
        name="newPassword"
        placeholder={t('new_password')}
      />
      <Input
        isForm
        type="password"
        name="confirmPassword"
        placeholder={t('confirm_password')}
      />
      <div className="flex flex-col pt-2">
        <span className="font-bold dark:text-dark-300 text-base">
          {t('password_requirements')}
        </span>
        <span className="font-normal dark:text-dark-300 pt-3">
          {t('guide_msg')}
        </span>
        <ul className="list-disc px-4 pt-4">
          <li className="font-normal dark:text-dark-300">
            {t('One special characters')}
          </li>
          <li className="font-normal dark:text-dark-300">
            {' '}
            {t('Min 6 characters')}
          </li>
          <li className="font-normal dark:text-dark-300">
            {t('One number (2 are recommended)')}
          </li>
          <li className="font-normal dark:text-dark-300">
            {t('Change it often')}
          </li>
        </ul>
      </div>
      <Button
        onClick={submitForm}
        secondary
        size="small"
        center
        className={'self-end xs:text-[10px]'}
      >
        {t('update')}
      </Button>
    </div>
  )
}
