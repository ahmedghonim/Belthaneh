import React from 'react'

interface Props {
  icon?: SVGElement | any
  text: string | number
  withIcon?: boolean
  withLabel?: boolean
  labelType?: string
  mainstyling?: string
  textStyling?: string
  labelStyling?: string
}

function DetailsBox({
  icon,
  text,
  withIcon,
  withLabel,
  labelType,
  mainstyling = '',
  textStyling = '',
  labelStyling = ''
}: Props) {
  return (
    <li
      className={`flex items-center gap-5 text-sm dark:text-light-100 text-dark-100 ${
        withLabel === true ? 'justify-between sm:gap-0' : ''
      } ${mainstyling} `}
    >
      {withIcon === true ? <div>{icon}</div> : ''}
      {withLabel === true ? (
        <span className={`block w-48  ${labelStyling}`}>{labelType}</span>
      ) : (
        ''
      )}
      <p className={`capitalize ${textStyling}`}>{text}</p>
    </li>
  )
}

export default DetailsBox
