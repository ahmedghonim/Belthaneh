import DatePicker, {
  CalendarProps,
  DateObject,
  DatePickerProps
} from 'react-multi-date-picker'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import { FieldProps, Field } from 'formik'
import Calendar from 'svg/calendar.svg'
import React, { FC, useEffect, useRef, useState } from 'react'
import moment from 'moment'

const DateInput: FC<
  CalendarProps &
    DatePickerProps & { label?: string; name: string; isForm?: boolean }
> = ({
  name,
  label,
  isForm = false,
  className = '',
  ...props
}: CalendarProps &
  DatePickerProps & { label?: string; name: string; isForm?: boolean }) => {
  const ref: React.MutableRefObject<any> = useRef(null)

  return isForm ? (
    <Field name={name}>
      {({
        field,
        form: { errors, touched, setFieldValue, values }
      }: FieldProps) => {
        return (
          <div className="w-full">
            {Boolean(label) && (
              <label
                htmlFor={name}
                className={
                  'text-start block mb-2 text-sm  w-full text-dark-200 dark:text-white font-normal'
                }
              >
                {label}
              </label>
            )}
            <DatePicker
              multiple={false}
              ref={ref}
              render={
                <CustomCalendarButton
                  {...props}
                  date={values[name]}
                  placeholder={props?.placeholder}
                  onClick={() => {
                    ref?.current?.openCalendar()
                  }}
                />
              }
              format={'DD/MM/YYYY'}
              containerClassName={`h-10 w-full  rounded-md border-dark-300 ${className}`}
              inputClass={`${
                Boolean(touched[name]) && Boolean(errors[name])
                  ? 'border-error-100'
                  : ''
              } bg-transparent h-10 w-full px-2`}
              className={`${
                Boolean(touched[name]) && Boolean(errors[name])
                  ? 'border-error-100'
                  : ''
              } h-10 w-full `}
              {...props}
              {...field}
              name={name}
              onChange={(dateObject: DateObject) => {
                setFieldValue(name, dateObject.format('DD/MM/YYYY'), true)
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
  ) : (
    <DatePicker
      multiple={false}
      ref={ref}
      render={
        <CustomCalendarButton
          className={className}
          date={moment(props.value as string).format(
            props.format ?? 'DD/MM/YYYY'
          )}
          placeholder={props?.placeholder}
          onClick={() => {
            ref?.current?.openCalendar()
          }}
        />
      }
      format={'DD/MM/YYYY'}
      containerClassName={`h-10 w-full  rounded-md border-dark-300 ${className}`}
      inputClass={'bg-transparent h-10 w-full px-2'}
      className={'h-10 w-full '}
      {...props}
      name={name}
    />
  )
}
export default DateInput

function CustomCalendarButton({
  date,
  onClick,
  placeholder,
  className = ''
}: {
  placeholder?: string
  date?: string
  onClick: () => void
  className?: string
}) {
  const [ssr, setSSR] = useState(true)
  useEffect(() => {
    setSSR(false)
  }, [])

  return (
    <div
      className={`border h-10 w-full dark:bg-transparent border-dark-300 rounded-md flex gap-2 items-center ${className}`}
      onClick={onClick}
    >
      <Calendar className="stroke-dark-300 mx-2" />
      {!ssr && (
        <span className="flex items-center h-full px-2">
          {date?.toString() ?? (
            <span className="text-dark-300">{placeholder}</span>
          )}
        </span>
      )}
    </div>
  )
}
