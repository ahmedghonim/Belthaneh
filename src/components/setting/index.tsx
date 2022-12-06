import React from 'react'
import {
  DeleteAccountCard,
  DeleteAccountCardProps
} from 'components/setting/delete-account-card'
import {
  SalonInfoCard,
  SalonInfoCardProps
} from 'components/setting/salon-info-card'
import SettingForm, { SettingFormProps } from 'components/setting/setting-form'

interface Props {
  salonCardProps: SalonInfoCardProps
  settingFormProps: SettingFormProps
  deleteAccountProps: DeleteAccountCardProps
}

export default function Setting({
  salonCardProps,
  settingFormProps,
  deleteAccountProps
}: Props) {
  return (
    <div className="w-full flex flex-col gap-8">
      <SalonInfoCard {...salonCardProps} />
      <SettingForm {...settingFormProps} />
      <DeleteAccountCard {...deleteAccountProps} />
    </div>
  )
}
