import useTranslation from 'next-translate/useTranslation'
import Text from 'ui/text'

interface ChartCardContainerProps {
  children: React.ReactNode
  title: string
  subTitle: string
}

function ChartCardContainer({
  children,
  title,
  subTitle
}: ChartCardContainerProps) {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col bg dark:bg-dark-200 bg-white w-full rounded-lg ps-4 pb-3 h-[247px]">
      <div className="flex justify-between items-center pe-4 pt-3">
        <Text size="md">{t(title)}</Text>
        <Text size="xs">{t(subTitle)}</Text>
      </div>
      {children}
    </div>
  )
}

export default ChartCardContainer
