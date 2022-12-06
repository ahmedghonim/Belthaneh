import SettingComponent from 'components/setting'
import React, { useState } from 'react'

export default function Setting() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
    language: '',
    newPassword: '',
    confirmPassword: ''
  }
  const [activeAccount, setActiveAccount] = useState<boolean>(true)
  const onSubmit = (values: any, helpers: any) => {
    //
  }
  const handleToggleSalonState = () => {
    setActiveAccount(!activeAccount)
  }

  const handleDeactivate = () => {
    //
  }
  const handleDelete = () => {
    //
  }

  const salonCardProps = {
    img: 'https://placeimg.com/192/192/people',
    name: 'salon Name',
    description: 'salon Name',
    checked: activeAccount,
    handleToggle: handleToggleSalonState
  }
  const settingFormProps = {
    initialValues,
    onSubmit
  }
  const deleteAccountProps = {
    handleDeactivate,
    handleDelete
  }
  return (
    <SettingComponent
      settingFormProps={settingFormProps}
      salonCardProps={salonCardProps}
      deleteAccountProps={deleteAccountProps}
    />
  )
}
