import React from 'react'
import { DownloadBoxProps } from 'components/home/types'

function DownloadBox({ platformIcon, platformName, text }: DownloadBoxProps) {
  return (
    <a
      href="#"
      aria-label="download app"
      className="bg-black flex items-center justify-between px-4 py-1 rounded-lg w-[180px] border-2 border-transparent duration-300 hover:bg-transparent hover:border-black [&:hover>div>*]:!text-black [&:hover>.icon]:!fill-black"
    >
      {platformIcon}
      <div className="flex flex-col">
        <span className="text-white text-xs">{text}</span>
        <span className="text-white text-md font-bold">{platformName}</span>
      </div>
    </a>
  )
}
export default DownloadBox
