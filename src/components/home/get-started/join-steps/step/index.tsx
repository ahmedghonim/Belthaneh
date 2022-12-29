import React from 'react'
import { JoinStepProps } from 'components/home/types'

function Step({ num, text, className = '' }: JoinStepProps) {
  return (
    <li className="flex flex-col items-center gap-3 w-[30%] ">
      <span
        className={`animate-bounce w-[77px] h-[77px] rounded-full bg-secondary-100 flex justify-center items-center text-white text-[30px] font-medium ${className}`}
      >
        {num}
      </span>
      <span className="text-lg">{text}</span>
    </li>
  )
}

export default Step
