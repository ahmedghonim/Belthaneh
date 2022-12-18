import { cva } from 'class-variance-authority'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React, { useState } from 'react'
import { Modal, Text } from 'ui'
import Actions from 'components/common/actions'

type status = 'outOfStock' | 'lowStock' | 'expired' | 'available'

export interface InventoryCardProps {
  img?: string
  name?: string
  code?: string
  description?: string
  remaining: number
  price: number
  id: string
  handleEdit: () => void
  handleDelete: () => void
  status: status
}

const footerColor = cva(
  'flex justify-between items-center h-8  px-4 rounded-br-2xl rounded-bl-2xl ',
  {
    variants: {
      status: {
        outOfStock: 'bg-error-100',
        lowStock: 'bg-secondary-100',
        expired: 'bg-warning-100',
        available: 'bg-secondary-100'
      }
    },
    defaultVariants: {
      status: 'available'
    }
  }
)

export default function InventoryCard({
  img,
  name,
  code,
  price,
  description,
  remaining,
  status,
  handleDelete,
  handleEdit
}: InventoryCardProps) {
  const [openLargeImg, setOpenLargeImg] = useState(false)
  const { t } = useTranslation('common')
  const Action = () => (
    <div className="absolute flex gap-0 top-0 rtl:left-0 ltr:right-0 bg-white   ltr:rounded-bl-[15px] rtl:rounded-br-[15px] justify-around px-[6px] py-[2px]  ">
      <Actions onDelete={handleDelete} onEdit={handleEdit} />{' '}
    </div>
  )

  const handleResizeScreen = () => {
    setOpenLargeImg(!openLargeImg)
  }

  const [imageSize, setSmageSize] = useState({
    width: 1,
    height: 1
  })

  const CardData = () => (
    <div className="card bg-base-100 shadow-xl sm:w-[24%] w-full relative">
      <figure>
        <Image
          onClick={handleResizeScreen}
          loader={() => img ?? ''}
          src={img ?? ''}
          alt={name ?? ''}
          width={226}
          height={84}
          className="rounded-tl-[4px] rounded-tr-[4px] w-full"
        />
      </figure>
      <div className="card-body p-3 dark:bg-dark-200 relative min-h-[116px]">
        <div className="flex justify-between items-center">
          <Text size={'sm'} className="card-title" style={{ lineClamp: 1 }}>
            {name}
          </Text>
          <Action />
        </div>
        <Text size={'xs'} className="card-title !text-dark-300">
          {t('code')}:{code}
        </Text>
        <Text
          size={'xs'}
          className="card-title !text-dark-300"
          style={{ lineClamp: 2 }}
        >
          {t('description')}:{description}
        </Text>
      </div>
      <div className={footerColor({ status })}>
        <Text size={'xs'} className="font-bold">
          {t('left')}:{remaining}
        </Text>
        <Text size={'xs'} className="font-bold">
          {price} {t('sar')}
        </Text>
      </div>
    </div>
  )

  return (
    <>
      <Modal open={openLargeImg} onClose={handleResizeScreen}>
        <Image
          loader={() => img ?? ''}
          src={img ?? ''}
          alt={name ?? ''}
          priority={true}
          onLoadingComplete={(target) => {
            setSmageSize({
              width: target.naturalWidth,
              height: target.naturalHeight
            })
          }}
          width={imageSize.width}
          height={imageSize.height}
        />
        <div className="flex justify-between items-center mt-4">
          <Text size={'sm'} className="card-title">
            {name}
          </Text>
        </div>
        <Text size={'xs'} className="card-title !text-dark-300">
          {t('code')}:{code}
        </Text>
        <Text size={'xs'} className="card-title !text-dark-300">
          {t('description')}:{description}
        </Text>
      </Modal>
      <CardData />
    </>
  )
}
