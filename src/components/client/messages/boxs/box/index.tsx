import React, { useState } from 'react'
import BoxFace from '../box-face'
import { BoxType } from 'components/client/messages/types'

function Box({
  mainData,
  frontData,
  backData,
  onClickFun,
  formDir = () => {}
}: BoxType) {
  const [flip, setFlip] = useState<boolean>(false)
  // rotate card
  const flipFun = () => {
    setFlip(!flip)
    formDir()
  }

  return (
    <div className="perspective-700 h-52">
      <div
        className={`relative preserve-3d  duration-1000 ${
          flip ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full top-0 right-0">
          <BoxFace
            faceDir="front"
            {...mainData}
            {...frontData}
            onClickFun={onClickFun}
            flipFun={flipFun}
          />
        </div>
        <div className="absolute w-full h-full top-0 right-0 rotate-y-180 backface-hidden">
          <BoxFace
            faceDir="back"
            {...mainData}
            {...backData}
            onClickFun={onClickFun}
            flipFun={flipFun}
          />
        </div>
      </div>
    </div>
  )
}

export default Box
