import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import ProgressIcon from 'svg/progress.svg'
interface Props {
  total: number
  percentage: number
  progress: number
  title: string
  icon: React.ReactElement<SVGAElement | any>
  className?: string
}

function CardInfo({
  total,
  percentage,
  progress,
  title,
  icon,
  className = ''
}: Props) {
  const { t } = useTranslation('common')
  return (
    <div
      className={`rounded-md p-2 min-h-[102px] shadow-lg dark:bg-dark-200 bg-white flex flex-col justify-between flex-1 ${className}`}
    >
      <div className="flex justify-between items-center">
        <h6 className="font-semibold text-[18px]">{title}</h6>

        <h6 className="font-semibold text-lg]">{total}</h6>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <ProgressIcon />

          <span>{percentage} %</span>
          <span>
            + {progress} {t('this_week')}
          </span>
        </div>

        <span>{icon}</span>
      </div>
    </div>
  )
}

export default CardInfo
