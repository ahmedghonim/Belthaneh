import { FieldProps, Field } from 'formik'
import React from 'react'
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2'
import Search from 'svg/search.svg'
interface Props extends PhoneInputProps {
  label: string
  name: string
  showSearch?: boolean
}

const InputPhoneForm = ({ label, name, showSearch, ...props }: Props) => {
  const End = () => (
    <div
      className="px-[4px] w-[34px] focus:outline-none absolute items-center justify-end  ltr:right-0 rtl:left-0  block z-10 top-9"
      id="end"
    >
      {showSearch != null && (
        <Search className="fill-dark-300 cursor-pointer" />
      )}
    </div>
  )

  return (
    <Field name={name}>
      {({ field, form: { errors, touched, setFieldValue } }: FieldProps) => {
        return (
          <div className="w-full relative">
            <label
              className=" block mb-2 text-sm  w-full text-dark-200 dark:text-white font-normal text-start"
              htmlFor={name}
            >
              {label}
            </label>
            <PhoneInput
              {...props}
              dropdownStyle={{
                background: 'dark:bg-dark-100'
              }}
              inputStyle={{
                background: 'transparent',
                width: '100%',
                height: '40px',
                padding: '0px 47px'
              }}
              buttonStyle={{
                background: 'transparent',
                width: 84
              }}
              inputClass="!border-dark-300 rounded"
              buttonClass="!border-dark-300 rounded column-rtl"
              country={'sa'}
              {...field}
              onChange={(val) => {
                setFieldValue(name, val, true)
              }}
            />
            {Boolean(touched[name]) && Boolean(errors[name]) && (
              <div className="text-error-100 text-sm text-start">
                <>{errors[name]}</>
              </div>
            )}
            <End />
          </div>
        )
      }}
    </Field>
  )
}
export default InputPhoneForm
