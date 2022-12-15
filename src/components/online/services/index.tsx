import ServicesCard, { ServiceCardProps } from 'components/common/service-card'
import { Button, Text } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import Navigation from '../navigation'

export interface ServicesData extends ServiceCardProps {
  checked: boolean
  onChange: () => void
}
interface ServicesProps {
  onUpdate: () => void
  services: ServicesData[]
}

export default function Services({ services, onUpdate }: ServicesProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col">
      <Navigation />
      <Text>{t('service_notes')}</Text>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap sm:pt-10 pt-5">
        {services?.map((_item) => (
          <div key={_item.id} className="sm:w-[30%]">
            {' '}
            <ServicesCard
              {..._item}
              actions={
                <input
                  type="checkbox"
                  checked={_item.checked}
                  className="checkbox checkbox-primary self-end "
                  onChange={() => _item.onChange()}
                />
              }
            />
          </div>
        ))}
      </div>
      <Button
        onClick={onUpdate}
        className={'sm:self-end  self-center mt-5'}
        primary
      >
        {t('update')}
      </Button>
    </div>
  )
}
