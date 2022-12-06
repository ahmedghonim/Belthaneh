import { FieldProps, Field } from 'formik'
import React, { FC } from 'react'

const CheckBox: FC<CheckBoxProps & { isForm: boolean }> = ({
  name,
  isForm,
  ...props
}: CheckBoxProps & { isForm: boolean }) => {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => {
        return (
          <div>
            <CustomCheckBox {...props} {...field} name={name} />
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
    <CustomCheckBox {...props} name={name} />
  )
}
export default CheckBox

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  value?: any
  label?: string
  error?: boolean
}

function CustomCheckBox({ name, label, value, ...props }: CheckBoxProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-center">
        <input
          type="checkbox"
          className="checkbox"
          {...props}
          name={name}
          checked={value}
        />
        {Boolean(label) && (
          <span className="label-text dark:text-white text-dark-200 px-3">
            {label}
          </span>
        )}
      </label>
    </div>
  )
}
