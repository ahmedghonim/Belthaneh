import MembershipForm from 'components/services/forms/membership-form'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
export default function CreateMembership() {
  const { t } = useTranslation('common')
  const handleCancel = () => {
    //
  }
  const membershipData = {
    initialValues: null,
    onSubmit: (values: any) => {
      console.log(values, 'value')
    },
    services: [
      { value: '1', label: 'hair color' },
      { value: '2', label: 'hair cut' }
    ],
    handleCancel
  }

  return (
    <>
      <Head>{t('memberships_create-membership')}</Head>
      <MembershipForm {...membershipData} />
    </>
  )
}
