import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Card, Text } from 'ui'
interface Props {
  progress: number
  current: number
  title: string
  subTitle: string
  icon: React.ReactElement<SVGAElement>
}
function CardInfo({ progress, current, title, subTitle, icon }: Props) {
  const { t } = useTranslation('common')
  return (
    <Card className="flex flex-col justify-between flex-1">
      <div className="flex justify-between flex-1">
        <Text as="h3" size="md" className="capitalize">
          {t(title)}
        </Text>
        <Text size="md">{current}</Text>
      </div>

      <div className="flex justify-between gap-8 items-end flex-1">
        <Text>
          {progress} {t(subTitle)}
        </Text>
        {icon}
      </div>
    </Card>
  )
}

export default CardInfo
