import React, { useRef } from 'react'

interface Props {
  icon: SVGElement | any
  buttonText: string | React.ReactNode
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

function UploadImg({
  name = '',
  icon,
  buttonText,
  className = '',
  onChange
}: Props) {
  const filesInput = useRef<HTMLInputElement>(null)

  const uploadFun = () => {
    filesInput.current?.click()
  }

  return (
    <button
      className={`grid place-items-center  border-2 border-dashed ${className}`}
      onClick={uploadFun}
      type="button"
    >
      <div className="grid place-items-center gap-3">
        {icon}
        <div className="text-sm capitalize xs:text-dark-100  dark:xs:text-white sm:text-primary-100">
          {buttonText}
        </div>
      </div>
      <input
        type="file"
        className="hidden"
        ref={filesInput}
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
    </button>
  )
}

export default UploadImg
