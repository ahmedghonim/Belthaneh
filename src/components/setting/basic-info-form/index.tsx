import React from 'react'
import Input from 'ui/input'
import BasicInfo from 'svg/basicInfo.svg'
import useTranslation from 'next-translate/useTranslation'
import { Button } from 'ui'
import { useFormikContext } from 'formik'

export default function BasicInfoForm() {
  const { t } = useTranslation('common')
  const { submitForm } = useFormikContext()

  return (
    <div className="flex flex-col gap-5 flex-1 rounded-lg shadow-lg bg-white dark:bg-dark-200 p-4 pb-14">
      <div className="flex items-center gap-3">
        <BasicInfo className="sm:hidden" />
        <span className="text-base dark:text-white text-dark-300 font-bold">
          {t('Basic Info')}
        </span>
      </div>

      <Input isForm name="name" label={t('Full Name')} />
      <Input isForm name="phone" label={t('Phone Number')} />
      <Input isForm name="email" label={t('E-Mail')} />
      <Input isForm name="language" label={t('language')} />
      <Button
        secondary
        onClick={submitForm}
        className="self-end sm:hidden xs:text-[10px]"
      >
        {t('update')}
      </Button>
    </div>
  )
}
