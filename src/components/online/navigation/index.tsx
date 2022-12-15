import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export default function Navigation() {
  const { t } = useTranslation('common')
  const { push, asPath } = useRouter()
  const handleSettingNavigate = () => {
    void push('/admin/online/setting')
  }
  const handleServiceNavigate = () => {
    void push('/admin/online/services')
  }
  const Button = ({
    onClick,
    currentPath,
    title
  }: {
    onClick: () => void
    currentPath: string
    title: string
  }) => (
    <button
      onClick={onClick}
      className={`border-0 font-bold ${
        asPath === currentPath ? 'dark:border-primary-100 border-b-[1px]' : ''
      }`}
    >
      {title}
    </button>
  )

  return (
    <div className="flex gap-4 pb-4">
      <Button
        onClick={handleSettingNavigate}
        title={t('settings')}
        currentPath={'/admin/online/setting'}
      />
      <Button
        onClick={handleServiceNavigate}
        title={t('services')}
        currentPath={'/admin/online/services'}
      />
    </div>
  )
}
