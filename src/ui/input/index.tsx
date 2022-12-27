import { FieldProps, Field } from 'formik'
import React, { FC, useState } from 'react'
import Lock from 'svg/lock-reset.svg'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  isForm?: boolean
  type?: string
  placeholder?: string
  value?: any
  label?: string
  error?: boolean
  StartComponent?: React.FC
  EndComponent?: React.FC
}
const Input: FC<InputProps> = ({ name, isForm = false, ...props }) => {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => {
        return (
          <div className="w-full">
            <CustomInput
              {...props}
              {...field}
              name={name}
              error={Boolean(Boolean(touched[name]) && errors[name])}
            />
            {Boolean(touched[name]) && Boolean(errors[name]) && (
              <div className="text-error-100 text-sm text-start">
                <>{errors[name]}</>
              </div>
            )}
          </div>
        )
      }}
    </Field>
  ) : (
    <CustomInput {...props} name={name} />
  )
}
export default Input

const CustomInput: React.FC<InputProps> = ({
  EndComponent,
  StartComponent,
  error = false,
  name,
  type = 'text',
  value,
  placeholder,
  label = null,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const PasswordEye = () => (
    <button
      onClick={handleShowPassword}
      className="px-[4px] focus:outline-none absolute items-center justify-end  ltr:right-1 rtl:left-1 block z-10 bottom-[12px]"
    >
      <Lock className="fill-black dark:fill-white" />
    </button>
  )

  const End = () => (
    <div
      className="px-[4px] focus:outline-none absolute items-center justify-end  ltr:right-1 rtl:left-1  block z-10 bottom-[10px]"
      id="end"
    >
      {EndComponent != null && <EndComponent />}
    </div>
  )

  const Start = () => (
    <div
      className="px-[4px]  focus:outline-none absolute items-center justify-end  ltr:left-1 rtl:right-1  block z-10 top-[9px]"
      id="start"
    >
      {StartComponent != null && <StartComponent />}
    </div>
  )
  const { className = '', ...otherProps } = props
  return (
    <div className="relative w-full justify-between">
      {Boolean(label) && (
        <label
          htmlFor={name}
          className={
            ' text-start block mb-2 text-sm  w-full text-dark-200 dark:text-white font-normal'
          }
        >
          {label}
        </label>
      )}
      <Start />

      <End />
      <input
        name={name}
        id={name}
        value={value}
        placeholder={placeholder ?? ''}
        type={type === 'password' && showPassword ? 'text' : type}
        className={`w-full rounded-md h-10 border border-dark-300 
         ${error ? 'border-error-100' : ''} bg-transparent indent-4  ${
          type === 'password' ? 'pe-10' : ''
        } placeholder:text-dark-300 ${className}`}
        {...otherProps}
      />

      {type === 'password' && <PasswordEye />}
    </div>
  )
}
