import Counter from 'components/common/counter'
import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Text } from 'ui'
import { Options } from 'ui/select'

export interface CartCardProps {
  id?: string
  img?: string
  name?: string
  qty?: number
  price?: number
  serviceType: 'services' | 'packages' | 'memberships'
  category?: string
}
export interface ServiceField {
  service: { id: string; name: string; img: string; price: number } | null
  employee: Options | null
  category: string | null
  date: Date | null
  qty: number | null
}

export default function CartCard({
  img,
  price,
  name,
  qty = 0,
  id,
  serviceType
}: CartCardProps) {
  const { t } = useTranslation('common')
  const { values, setValues } = useFormikContext<{
    services: ServiceField[]
    packages: Array<Partial<ServiceField>>
    memberships: Array<Partial<ServiceField>>
  }>()

  const onAddQty = (serviceId: string) => {
    const newServices = values?.[serviceType]?.map?.((_item) => {
      if (_item?.service?.id === serviceId) {
        _item.qty = (_item?.qty ?? 0) + 1
      }
      return _item
    })
    setValues({
      ...values,
      [serviceType]: newServices
    })
  }
  const onRemoveQty = (serviceId: string) => {
    const newServices: Array<Partial<ServiceField>> = [...values?.[serviceType]]
      ?.reduce<Array<Partial<ServiceField>>>?.(
      (prev, current: Partial<ServiceField>) => {
        if (current?.service?.id === serviceId) {
          if ((current?.qty ?? 0) - 1 > 0) {
            current.qty = (current?.qty ?? 0) - 1
            prev.push(current)
            return prev
          } else {
            return prev
          }
        }
        prev.push(current)
        return prev
      },
      []
    )
    setValues({
      ...values,
      [serviceType]: newServices
    })
  }
  return (
    <div
      className="flex dark:bg-dark-100 bg-light-400 rounded-md items-center justify-between "
      key={id}
    >
      <div className="flex items-center">
        <div className="w-[41px] h-[41px] relative">
          <Image src={img ?? ''} alt={name ?? ''} fill onLoad={() => img} />
        </div>
        <Text className="px-2 font-bold" size={'sm'}>
          {name}
        </Text>
      </div>
      <div className="flex px-3 items-center gap-2">
        <Counter
          onRemove={() => onRemoveQty(id ?? '')}
          onAdd={() => onAddQty(id ?? '')}
          value={qty}
        />
        <div className="border-dark-300 border-[1px] rounded-md  px-2  py-[2px]">
          <Text className=" !text-xs !text-primary-100">
            {price} {t('sar')}
          </Text>
        </div>
      </div>
    </div>
  )
}
