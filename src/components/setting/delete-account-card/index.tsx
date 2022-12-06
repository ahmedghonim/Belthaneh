import useTranslation from 'next-translate/useTranslation'
import Button from 'ui/button'

export interface DeleteAccountCardProps {
  handleDeactivate: () => void
  handleDelete: () => void
}

export function DeleteAccountCard({
  handleDeactivate,
  handleDelete
}: DeleteAccountCardProps) {
  const { t } = useTranslation('common')

  return (
    <div className="px-5 pt-4 pb-8 shadow rounded-lg bg-white dark:bg-dark-200">
      <span className="font-bold text-base">{t('Delete_Account')} </span>
      <div className="flex items-center space-x-5 justify-between">
        <span className="text-xs">{t('delete_account_msg')}</span>
        <div className="flex gap-4">
          <Button
            onClick={handleDeactivate}
            primaryBorder
            className={
              'bg-transparent !text-dark-300 border-dark-300 font-bold text-xs px-6 py-4'
            }
          >
            {t('deactivate')}
          </Button>
          <Button
            onClick={handleDelete}
            secondary
            className={'font-bold text-xs shadow-md px-6 py-4 uppercase'}
          >
            {t('Delete_Account')}
          </Button>
        </div>
      </div>
    </div>
  )
}
