import * as React from 'react'
import Toggle from 'ui/toggle'
import Image from 'next/image'
import { Button } from 'ui'
import useTranslation from 'next-translate/useTranslation'

export interface SalonInfoCardProps {
  img: string
  name: string
  description: string
  checked: boolean
  handleToggle: () => void
  handleAddBranch: () => void
}

export function SalonInfoCard({
  name,
  img,
  description,
  checked,
  handleToggle,
  handleAddBranch
}: SalonInfoCardProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <div className="sm:flex justify-between p-[15px] shadow rounded-lg bg-white dark:bg-dark-200 hidden">
        <div className="flex items-center gap-5">
          <Image
            src={img ?? '/images/salon.png'}
            alt={name}
            width={54}
            height={54}
            className="rounded-[10px]"
          />
          <div className="flex flex-col items-center">
            <span>{name ?? ''}</span>
            <span>{description ?? ''}</span>
          </div>
        </div>
        <Toggle
          name={'accountStatus'}
          checked={checked}
          onChange={handleToggle}
        />
      </div>
      <div className="flex sm:hidden justify-between">
        <Button
          secondary
          className={'rounded-[10px] ltr:pr-10 rtl:pl-10'}
          onClick={handleToggle}
        >
          <span
            className={`${
              checked ? 'bg-primary-100' : 'bg-dark-400'
            } p-[9.5px] rounded-[50%]`}
          />
          {name}
        </Button>
        <Button primary onClick={handleAddBranch}>
          {t('add_branch')}
        </Button>
      </div>
    </>
  )
}
