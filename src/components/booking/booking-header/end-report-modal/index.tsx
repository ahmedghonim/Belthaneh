import Modal from 'ui/modal'
import useTranslation from 'next-translate/useTranslation'
import { Button, Text } from 'ui'

export interface EndReportModalProps {
  confirmEndReport: () => void
  cancelEndReport: () => void
  openReportModal: boolean
}
export default function EndReport({
  cancelEndReport,
  openReportModal,
  confirmEndReport
}: EndReportModalProps) {
  const { t } = useTranslation('common')
  const header = (
    <Text size={'base'} className="font-bold">
      {t('note')}:
    </Text>
  )
  return (
    <Modal
      onClose={cancelEndReport}
      open={openReportModal}
      header={header}
      className="!p-4 sm:w-[551px]"
      wrapperClassName="!p-0"
    >
      <div className="flex flex-col gap-2">
        <Text className="font-bold" size={'sm'}>
          {t('once_you_end_the_day_report_you_will')}
        </Text>
        <Text size={'sm'}>-{t('add_new_client_&_booking')}</Text>
        <Text size={'sm'}>-{t('add_new_Sales')}</Text>
      </div>
      <Text className="pt-9 font-bold">
        {t('Are_you_sure_end_the_day_report')}
      </Text>
      <div className="mt-7 flex self-start gap-8">
        <Button primary onClick={confirmEndReport} className="px-8">
          {t('end')}
        </Button>
        <Button onClick={cancelEndReport} className="bg-transparent">
          {t('cancel')}
        </Button>
      </div>
    </Modal>
  )
}
