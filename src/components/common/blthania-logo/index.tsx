import React from 'react'
import { Text } from 'ui'
import { BlthaniaLogoProps } from 'components/salon-online/type'
import Logo from 'svg/logo.svg'
import Link from 'next/link'

function BlthaniaLogo({ fontSize = '', color = '' }: BlthaniaLogoProps) {
  return (
    <Link className="flex items-center gap-3 " aria-label="brand logo" href="#">
      <Text as="span" className={`!font-semibold ${fontSize} ${color}`}>
        بالـثانيـة
      </Text>
      <Logo fill="#3031D9" />
    </Link>
  )
}

export default BlthaniaLogo
