import React from 'react'
import Bold from 'svg/bold.svg'
import Italic from 'svg/italic.svg'
import UnderLine from 'svg/underline.svg'
import LetterCase from 'svg/letter-case.svg'
import BulletsList from 'svg/bullet-list.svg'
import NumberList from 'svg/number-list.svg'
import LeftAlign from 'svg/left-align.svg'
import RightAlign from 'svg/right-align.svg'
import Aa from 'svg/Aa.svg'
import FontStyleOne from 'svg/font-style1.svg'
import FontStyleTwo from 'svg/font-style2.svg'

interface Props {
  className?: string
}

function TextAreaEditors({ className = '' }: Props) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <span onClick={() => {}}>
        <Bold />
      </span>
      <span onClick={() => {}}>
        <Italic />
      </span>
      <span onClick={() => {}}>
        <UnderLine />
      </span>
      <span onClick={() => {}}>
        <LetterCase />
      </span>
      <span onClick={() => {}}>
        <BulletsList />
      </span>
      <span onClick={() => {}}>
        <NumberList />
      </span>
      <span onClick={() => {}}>
        <LeftAlign />
      </span>
      <span onClick={() => {}}>
        <RightAlign />
      </span>
      <span onClick={() => {}}>
        <Aa />
      </span>
      <span onClick={() => {}}>
        <FontStyleOne />
      </span>
      <span onClick={() => {}}>
        <FontStyleTwo />
      </span>
    </div>
  )
}

export default TextAreaEditors
