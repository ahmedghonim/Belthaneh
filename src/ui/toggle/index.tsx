import React from 'react'

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  checked: boolean
}

export default function Toggle({
  name,
  label,
  checked,
  ...props
}: ToggleProps) {
  return (
    <div className="form-control w-52">
      <label className="cursor-pointer label">
        <span className="ml-3 text-gray-300 font-medium">{label}</span>
        <input
          type="checkbox"
          className="toggle toggle-primary "
          checked={checked}
          {...props}
        />
      </label>
    </div>
    // <label className="flex items-center cursor-pointer">
    //   <div className="relative">
    //     <input
    //       type="checkbox"
    //       id="toggleB"
    //       className="toggle sr-only"
    //       name={name}
    //       {...props}
    //     />
    //   </div>
    //   <div className="ml-3 text-gray-700 font-medium">{label}</div>
    // </label>
  )
}
