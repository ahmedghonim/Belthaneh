import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Text } from 'ui'
import { Options } from 'ui/select'
import CartCard from './card'

export default function Cart() {
  const { values } = useFormikContext<{
    services: Array<{
      service: { id: string; name: string; img: string; price: number } | null
      employee: Options | null
      category: string | null
      date: Date | null
      qty: number | null
    }>
    packages: Array<{
      service: { id: string; name: string; img: string; price: number } | null
      employee: Options | null
      date: Date | null
      qty: number | null
    }>
    memberships: Array<{
      service: { id: string; price: number; name: string } | null
      qty: number | null
    }>
  }>()

  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col gap-2 h-1/3 max-h-[30vh] overflow-y-scroll">
      <div className="flex flex-col gap-2">
        <Text size={'sm'} className="font-bold">
          {t('services')}
        </Text>
        <div className="flex gap-2 flex-col">
          {values.services?.map(({ service, category, qty }) => (
            <div key={service?.id}>
              <CartCard
                {...service}
                category={category ?? undefined}
                serviceType={'services'}
                qty={qty ?? 0}
                id={service?.id ?? ''}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Text size={'sm'} className="font-bold">
          {t('package')}
        </Text>
        <div className="flex gap-2 flex-col">
          {values.packages?.map(({ service, qty }) => (
            <div key={service?.id}>
              <CartCard
                {...service}
                serviceType={'packages'}
                qty={qty ?? 0}
                id={service?.id ?? ''}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Text size={'sm'} className="font-bold">
          {t('membership')}
        </Text>
        <div className="flex gap-2 flex-col">
          {values.memberships?.map(({ service, qty }) => (
            <div key={service?.id}>
              <CartCard
                serviceType={'memberships'}
                qty={qty ?? 0}
                price={service?.price ?? 0}
                id={service?.id ?? ''}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
