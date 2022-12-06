import { FieldProps, Field } from 'formik'
import React, { FC } from 'react'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  type?: string
  placeholder?: string
  value?: any
  label?: string
  error?: boolean
  StartComponent?: React.FC
  EndComponent?: React.FC
}

const TextArea: FC<TextAreaProps & { isForm: boolean }> = ({
  name,
  isForm,
  ...props
}) => {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => {
        return (
          <div className="w-full">
            <CustomTextArea
              {...props}
              {...field}
              name={name}
              error={Boolean(Boolean(touched[name]) && Boolean(errors[name]))}
            />
            {Boolean(Boolean(touched[name]) && Boolean(errors[name])) && (
              <div className="text-error-100 text-sm text-start">
                <>{errors[name]}</>
              </div>
            )}
          </div>
        )
      }}
    </Field>
  ) : (
    <CustomTextArea {...props} name={name} />
  )
}
export default TextArea

const CustomTextArea: React.FC<TextAreaProps> = ({
  EndComponent,
  StartComponent,
  error = false,
  name,
  type,
  value,
  placeholder,
  label,
  ...props
}) => {
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

      <textarea
        name={name}
        id={name}
        value={value}
        placeholder={placeholder ?? ''}
        className={`w-full rounded-md border border-dark-300 ${
          error ? 'border-error-100' : ''
        } bg-transparent indent-4  placeholder:text-dark-300`}
        {...props}
      />
    </div>
  )
}
