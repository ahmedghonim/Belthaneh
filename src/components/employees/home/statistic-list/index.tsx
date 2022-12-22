import { Text } from 'ui'
import ChartLine from 'svg/chart-line.svg'
import useTranslation from 'next-translate/useTranslation'

export interface StatisticsProps {
  totalEmployees: number
  totalEmployeesTitle: string
  topEmployees: number
  topEmployeesTitle: string
  newEmployees: number
  newEmployeesTitle: string
}

export default function Statistics({
  totalEmployees,
  totalEmployeesTitle,
  topEmployees,
  topEmployeesTitle,
  newEmployees,
  newEmployeesTitle
}: StatisticsProps) {
  const { t } = useTranslation('common')

  const Card = ({
    title,
    value,
    subTitle
  }: {
    subTitle: string
    title: string
    value: number
  }) => (
    <div className="flex flex-col dark:bg-dark-200 bg-white shadow rounded-lg p-3 gap-11 w-full">
      <div className="flex justify-between">
        <Text className="font-bold">{title}</Text>
        <Text className="font-bold">{value}</Text>
      </div>
      <div className="flex gap-4">
        <ChartLine className="fill-secondary-100" />
        <Text size={'sm'}>{subTitle}</Text>
      </div>
    </div>
  )
  return (
    <div className="flex gap-4 sm:flex-row flex-col">
      <Card
        value={totalEmployees}
        subTitle={totalEmployeesTitle}
        title={t('total_employees')}
      />
      <Card
        value={newEmployees}
        subTitle={newEmployeesTitle}
        title={t('new_employees')}
      />
      <Card
        value={topEmployees}
        subTitle={topEmployeesTitle}
        title={t('top_employees')}
      />
    </div>
  )
}
