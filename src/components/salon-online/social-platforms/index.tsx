import React from 'react'
import { SocialLinksProps } from 'components/salon-online/type'
import Facebook from 'svg/facebook.svg'
import Instagram from 'svg/instagram.svg'
import Twitter from 'svg/twitter.svg'
import WhatsApp from 'svg/whatsApp.svg'

function SocialPlatforms({
  facebook,
  instagram,
  twitter,
  whatsApp,
  fill
}: SocialLinksProps) {
  return (
    <div>
      <ul className="flex items-center gap-3">
        {facebook !== undefined ? (
          <li>
            <a
              href={facebook}
              aria-label="Facebook link"
              className="[&:hover>.icon]:fill-secondary-100 [&:hover>.icon]:scale-100"
            >
              <Facebook
                className="icon scale-75 duration-200"
                fill={fill === undefined ? '#F97E4E' : fill}
              />
            </a>
          </li>
        ) : (
          ''
        )}
        {instagram !== undefined ? (
          <li>
            <a
              href={instagram}
              aria-label="Instagram link"
              className="[&:hover>.icon]:fill-secondary-100 [&:hover>.icon]:scale-100"
            >
              <Instagram
                className="icon scale-75 duration-200"
                fill={fill === undefined ? '#F97E4E' : fill}
              />
            </a>
          </li>
        ) : (
          ''
        )}
        {twitter !== undefined ? (
          <li>
            <a
              href={twitter}
              aria-label="Twitter link"
              className="[&:hover>.icon]:fill-secondary-100 [&:hover>.icon]:scale-100"
            >
              <Twitter
                className="icon scale-75 duration-200"
                fill={fill === undefined ? '#F97E4E' : fill}
              />
            </a>
          </li>
        ) : (
          ''
        )}
        {whatsApp !== undefined ? (
          <li>
            <a href={whatsApp} aria-label="WhatsApp link">
              <WhatsApp
                className="scale-75"
                fill={fill === undefined ? '#F97E4E' : fill}
              />
            </a>
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  )
}
export default SocialPlatforms
