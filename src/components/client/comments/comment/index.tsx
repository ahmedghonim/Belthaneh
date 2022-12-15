import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Card, Text } from 'ui'
import { CommentType } from 'components/client/comments/types'
import Eye from 'svg/eye.svg'

function Comment({ src, name, date, content }: CommentType) {
  const { t } = useTranslation('common')
  //  on show handler
  const onShowHandler = () => {}

  return (
    <Card className="xs:!bg-transparent flex xs:items-end items-center gap-5 relative sm:p-2">
      <div className="flex justify-center w-36 xs:w-10 ">
        <Image
          width={65}
          height={65}
          src={src}
          alt={t('commenter')}
          className=" xs:w-full xs:h-full rounded-full"
        />
      </div>
      <div className="xs:dark:bg-dark-200 xs:bg-white flex-1 p-3 rounded-[5px] rounded-bl-[30px]">
        <div className="flex items-center gap-3 mb-1">
          <Text as="span" className="!font-bold">
            {name}
          </Text>
          <p className="dark:text-[#67727E] text-dark-100 text-sm font-semibold">
            {date}
          </p>
        </div>
        <p className="dark:text-[#D9D9D9] xs:!text-xs text-sm text-dark-100 leading-relaxed">
          {content}
        </p>
      </div>
      <button
        className="absolute xs:top-4 top-2 ltr:right-4 rtl:left-4"
        onClick={onShowHandler}
      >
        <Eye stroke="#F97E4E" />
      </button>
    </Card>
  )
}

export default Comment
