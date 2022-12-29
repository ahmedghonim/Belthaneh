import React from 'react'
import BlthaniaLogo from '../blthania-logo'
import SocialPlatforms from '../social-platforms'

const currentYear = new Date().getFullYear()

function Footer({ className = '' }: { className?: string }) {
  return (
    <footer
      className={`bg-gradient-to-r from-[#d1d6dc] to-[#e5e9ef] py-8 grid place-items-center ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        <BlthaniaLogo fontSize="!text-lg" />
        <SocialPlatforms
          twitter={true}
          instagram={true}
          whatsApp={true}
          className="!fill-black"
        />
        <span>{`Blthania @ ${currentYear} .`}</span>
      </div>
    </footer>
  )
}

export default Footer
