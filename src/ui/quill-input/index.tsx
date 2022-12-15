import React from 'react'
import { Field, FieldProps } from 'formik'
import 'react-quill/dist/quill.snow.css'
import ReactQuill, { ReactQuillProps } from 'react-quill'

interface QuillInputProps extends ReactQuillProps {
  isForm?: boolean
  name?: string
  label?: string
}

export default function QuillInput({
  isForm = false,
  name = '',
  label,
  ...props
}: QuillInputProps) {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => (
        <div>
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
          <ReactQuill {...field} {...props} onBlur={() => undefined} />
          {Boolean(touched[name]) && Boolean(errors[name]) && (
            <div className="text-error-100 text-sm text-start">
              <>{errors[name]}</>
            </div>
          )}
        </div>
      )}
    </Field>
  ) : (
    <ReactQuill {...props} />
  )
}
