import React from 'react'
import BlthaniaLogo from '../blthania-logo'
import SocialPlatforms from '../../salon-online/social-platforms'
import { SocialLinksTypes } from 'components/salon-online/type'

const currentYear = new Date().getFullYear()

function Footer({ className = '' }: { className?: string }) {
  const socialPlatforms: SocialLinksTypes = {
    facebook: 'www.facebook.com',
    instagram: 'www.instagram.com',
    twitter: 'www.twitter.com'
  }

  return (
    <footer
      className={`bg-gradient-to-r from-[#d1d6dc] to-[#e5e9ef] py-8 grid place-items-center ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        <BlthaniaLogo fontSize="!text-lg" />
        <SocialPlatforms {...socialPlatforms} fill="![#000]" />
        <span>{`Blthania @ ${currentYear} .`}</span>
      </div>
    </footer>
  )
}

export default Footer
