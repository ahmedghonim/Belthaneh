import React, { useRef } from 'react'

interface Props {
  icon: SVGElement | any
  buttonText: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function UploadImg({ icon, buttonText, className = '', onChange }: Props) {
  const filesInput = useRef<HTMLInputElement>(null)

  const uploadFun = () => {
    filesInput.current?.click()
  }

  return (
    <button
      className={`grid place-items-center  border-2 border-dashed ${className}`}
      onClick={uploadFun}
    >
      <div className="grid place-items-center gap-3">
        {icon}
        <p className="text-sm capitalize xs:text-dark-100  dark:xs:text-white sm:text-primary-100">
          {buttonText}
        </p>
      </div>
      <input
        type="file"
        className="hidden"
        ref={filesInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
    </button>
  )
}

export default UploadImg
