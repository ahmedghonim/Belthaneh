import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import ReactSelect, { Props } from 'react-select'
import ReactSelectTheme from './ReactSelectTheme'
import { Field, FieldProps } from 'formik'

export interface Options {
  value: string | number
  label: string | number
}

interface SelectProps extends Props {
  options: Options[]
  isForm?: boolean
  label?: string
}

function Select({
  options,
  className = '',
  label,
  isForm = false,
  name = '',
  ...props
}: SelectProps & Partial<FieldProps>) {
  const { theme } = useTheme()
  const [styles, setStyles] = useState(ReactSelectTheme(theme))
  useEffect(() => {
    setStyles(ReactSelectTheme(theme))
  }, [theme])
  return isForm ? (
    <Field name="department">
      {({ field, form: { errors, touched, setFieldValue } }: FieldProps) => {
        return (
          <div className="w-full flex flex-col">
            {Boolean(label) && (
              <label
                htmlFor={name}
                className={
                  ' text-start block mb-2 text-sm  w-full text-dark-200 dark:text-white'
                }
              >
                {label}
              </label>
            )}
            <ReactSelect
              id="long-value-select"
              instanceId="long-value-select"
              options={options}
              styles={styles}
              {...field}
              {...props}
              name={name}
              classNamePrefix={`select2-selection ${
                Boolean(touched[name]) && Boolean(errors[name])
                  ? '!border-error-100'
                  : ''
              } `}
              className={`h-10 w-full ${className}  `}
              onChange={(selectedOption: any) =>
                setFieldValue(name, selectedOption.value)
              }
              {...props}
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
    <div className="w-full flex flex-col">
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
      <ReactSelect
        id="long-value-select"
        instanceId="long-value-select"
        options={options}
        styles={styles}
        {...props}
        className={`h-10 w-full ${className} `}
      />
    </div>
  )
}

export default Select
