import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Text } from 'ui'

export default function Instagram() {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col ">
      <Text>{t('instagram_title')}</Text>

      <ul className="pt-6">
        {t('instagram_steps')
          .split('|')
          .map((_item) => (
            <li key={_item}>
              <Text className="flex gap-2">
                <span>•</span>
                {_item}
              </Text>
            </li>
          ))}
      </ul>
      <Button primary className={'justify-end self-end sm:mt-28 mt-4'}>
        {t('start_now')}
      </Button>
    </div>
  )
}
