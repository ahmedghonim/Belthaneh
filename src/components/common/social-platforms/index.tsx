import React from 'react'
import Facebook from 'svg/facebook.svg'
import Instagram from 'svg/instagram.svg'
import Twitter from 'svg/twitter.svg'
import WhatsApp from 'svg/whatsApp.svg'
import LinkedIn from 'svg/linkedin.svg'

interface SocialLinksProps {
  facebook?: boolean
  instagram?: boolean
  twitter?: boolean
  whatsApp?: boolean
  linkedIn?: boolean
  fill?: string
  className?: string
}

function SocialPlatforms({
  facebook,
  instagram,
  twitter,
  whatsApp,
  linkedIn,
  className = ''
}: SocialLinksProps) {
  // single platform
  const SinglePlatform = ({
    icon: Icon,
    href,
    className = ''
  }: {
    icon: React.ElementType
    href: string
    className?: string
  }) => {
    return (
      <li>
        <a
          href={href}
          aria-label="platform link"
          className="[&:hover>.icon]:!fill-secondary-100 [&:hover>.icon]:scale-125"
        >
          <Icon className={`icon scale-100 duration-200 ${className}`} />
        </a>
      </li>
    )
  }

  return (
    <div>
      <ul className="flex items-center gap-3">
        {facebook === true ? (
          <SinglePlatform
            icon={Facebook}
            href="https://www.instagram.com/blthanih/"
            className={className}
          />
        ) : (
          ''
        )}
        {instagram === true ? (
          <SinglePlatform
            icon={Instagram}
            href="https://www.instagram.com/blthanih/"
            className={className}
          />
        ) : (
          ''
        )}
        {twitter === true ? (
          <SinglePlatform
            icon={Twitter}
            href="https://mobile.twitter.com/blthanih"
            className={className}
          />
        ) : (
          ''
        )}
        {whatsApp === true ? (
          <SinglePlatform
            icon={WhatsApp}
            href="https://api.whatsapp.com/message/D7TWJSIQXDWNK1?autoload=1&app_absent=0"
            className={className}
          />
        ) : (
          ''
        )}
        {linkedIn === true ? (
          <SinglePlatform
            icon={LinkedIn}
            href="https://www.linkedin.com/company/82163933/admin/"
            className={className}
          />
        ) : (
          ''
        )}
      </ul>
    </div>
  )
}
export default SocialPlatforms
