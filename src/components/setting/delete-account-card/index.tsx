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
    <div className="sm:p-4 shadow rounded-lg sm:bg-white sm:dark:bg-dark-200 bg-transparent">
      <span className="font-bold text-base sm:block hidden ">
        {t('Delete_Account')}{' '}
      </span>
      <div className="flex items-center justify-between">
        <span className="text-xs sm:block hidden text-dark-300">
          {t('delete_account_msg')}
        </span>
        <div className="flex justify-between xs:w-full m-0 sm:gap-4">
          <Button
            onClick={handleDeactivate}
            primaryBorder
            className={'!text-dark-300 !border-dark-300 uppercase px-[39px]'}
          >
            {t('deactivate')}
          </Button>
          <Button onClick={handleDelete} secondary className={'uppercase'}>
            {t('Delete_Account')}
          </Button>
        </div>
      </div>
    </div>
  )
}
