import Counter from 'components/common/counter'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Text } from 'ui'

export interface CartCardProps {
  id: string
  img?: string
  name: string
  qty: number
  price: number
  onAdd: () => void
  onRemove: () => void
  serviceType: 'service' | 'package' | 'membership'
  category?: string
}

export default function CartCard({
  onAdd,
  onRemove,
  img,
  price,
  name,
  qty,
  id
}: CartCardProps) {
  const { t } = useTranslation('common')

  return (
    <div
      className="flex dark:bg-dark-100 bg-light-400 rounded-md items-center justify-between "
      key={id}
    >
      <div className="flex items-center">
        <div className="w-[41px] h-[41px] relative">
          <Image src={img ?? ''} alt={name} fill onLoad={() => img} />
        </div>
        <Text className="px-2 font-bold" size={'sm'}>
          {name}
        </Text>
      </div>
      <div className="flex px-3 items-center gap-2">
        <Counter onRemove={onRemove} onAdd={onAdd} value={qty} />
        <div className="border-dark-300 border-[1px] rounded-md  px-[10px]  py-[2px]">
          <Text className=" !text-xs !text-primary-100">
            {price} {t('sar')}
          </Text>
        </div>
      </div>
    </div>
  )
}
