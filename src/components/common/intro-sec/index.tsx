import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Header from '../../home/header'
import Dots from 'images/Dots.png'
import BlthaniaLogo from 'svg/logo.svg'
interface Props {
  children: React.ReactNode
  className?: string
}

function IntroSection({ className = '', children }: Props) {
  return (
    <div
      className={`h-[70vh] px-4 relative py-9 bg-[#d1d6dc] rounded-bl-xl rounded-br-xl ${className}`}
    >
      <div className="w-[90%] mx-auto">
        <Header />
        <div>{children}</div>
      </div>

      <DotsBackground className="top-0 right-0 rotate-180" />

      <DotsBackground className="bottom-0 left-0" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <BlthaniaLogo className="fill-primary-100 scale-[7]" />
      </div>
    </div>
  )
}

// dots background
const DotsBackground = ({ className }: { className: string }) => {
  const { t } = useTranslation('common')

  return (
    <div className={`absolute w-[400px] h-[400px] ${className} z-10`}>
      <Image
        src={Dots}
        width={400}
        height={400}
        alt={t('image')}
        className="w-full h-full"
      />
    </div>
  )
}
export default IntroSection
