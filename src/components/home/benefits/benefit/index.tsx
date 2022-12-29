import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { SingleBenifitProps } from 'components/home/types'

function SingleBenifit({ src, text }: SingleBenifitProps) {
  const { t } = useTranslation('common')
  return (
    <div className="w-[30%] flex flex-col gap-8 items-center">
      <Image src={src} width={400} height={225} alt={t('image')} />
      <span className="text-secondary-100 font-bold text-lg">{text}</span>
    </div>
  )
}

export default SingleBenifit
