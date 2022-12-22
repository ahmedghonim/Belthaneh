import PermissionsComponent from 'components/employees/permissions'
import permissions from 'components/employees/permissions/permissions-list/index.mock'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
export default function Permissions() {
  const { t } = useTranslation('common')
  return (
    <div>
      <Head>{t('permissions')}</Head>
      <PermissionsComponent permissionListProps={{ list: permissions }} />
    </div>
  )
}
