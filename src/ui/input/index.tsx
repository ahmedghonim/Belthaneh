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
      className="px-1 flex focus:outline-none absolute items-center justify-end top-[12px] ltr:right-2 rtl:left-2 "
    >
      <Lock className="fill-black dark:fill-white" />
    </button>
  )

  const End = () => (
    <div
      className="px-1 flex focus:outline-none absolute items-center justify-end  ltr:right-0 rtl:left-0"
      id="end"
    >
      {EndComponent != null && <EndComponent />}
    </div>
  )

  const Start = () => (
    <div
      className="px-4px  focus:outline-none absolute items-center justify-end  ltr:left-0 rtl:right-0  block z-10"
      id="start"
    >
      {StartComponent != null && <StartComponent />}
    </div>
  )

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

      <input
        name={name}
        id={name}
        value={value}
        placeholder={placeholder ?? ''}
        type={type === 'password' && showPassword ? 'text' : type}
        className={`w-full rounded-md h-10 border border-dark-300 
         ${error ? 'border-error-100' : ''} bg-transparent indent-4  ${
          type === 'password' ? 'pe-10' : ''
        } placeholder:text-dark-300`}
        {...props}
      />
      <End />

      {type === 'password' && <PasswordEye />}
    </div>
  )
}
