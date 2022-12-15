import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Tabs } from 'ui'

export interface ServiceTypesProps {
  currentService: 'package' | 'service' | 'membership'
  onSelectService: (service: string) => void
}

export default function ServiceTypes({
  currentService,
  onSelectService
}: ServiceTypesProps) {
  const { t } = useTranslation('common')

  const isActive = (serviceType: string): boolean => {
    return currentService === serviceType
  }
  const tabs = [
    {
      primaryBorder: !isActive('service'),
      isActive: isActive('service'),
      label: t('service'),
      onClick: () => onSelectService('service')
    },
    {
      primaryBorder: !isActive('package'),
      isActive: isActive('package'),
      label: t('package'),
      onClick: () => onSelectService('package')
    },
    {
      primaryBorder: !isActive('membership'),
      isActive: isActive('membership'),
      label: t('membership'),
      onClick: () => onSelectService('membership')
    }
  ]
  return <Tabs tabs={tabs} className="!bg-transparent !px-0" size={'medium'} />
}
