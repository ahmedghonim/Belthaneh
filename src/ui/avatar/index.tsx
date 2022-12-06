import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt?: string
  className?: string
}

const Avatar = ({ src = '', alt = '', className = '' }: Props) => {
  return (
    <div className="avatar">
      <div className={`w-8 rounded-full ${className}`}>
        <Image
          src={src}
          alt={alt}
          sizes="100vw"
          width={'0'}
          height={'0'}
          onLoad={() => src}
          unoptimized
        />
      </div>
    </div>
  )
}
export default Avatar
