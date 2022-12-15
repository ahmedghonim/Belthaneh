import { FieldProps, Field } from 'formik'
import React from 'react'
import PhoneInput from 'react-phone-input-2'

const InputPhoneForm = ({ label, name }: any) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched, setFieldValue } }: FieldProps) => {
        return (
          <div className="w-full">
            <label
              className=" block mb-2 text-sm  w-full text-dark-200 dark:text-white font-normal text-start"
              htmlFor={name}
            >
              {label}
            </label>
            <PhoneInput
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
          </div>
        )
      }}
    </Field>
  )
}
export default InputPhoneForm
