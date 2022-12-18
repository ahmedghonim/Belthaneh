import React from 'react'
import { Text } from 'ui'
import { BlthaniaLogoProps } from 'components/salon-online/type'
import Logo from 'svg/logo.svg'

function BlthaniaLogo({ fontSize = '' }: BlthaniaLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Text as="span" className={`!font-semibold ${fontSize}`}>
        بالـثانيـة
      </Text>
      <a href="#" aria-label="brand logo">
        <Logo fill="#3031D9" />
      </a>
    </div>
  )
}

export default BlthaniaLogo
