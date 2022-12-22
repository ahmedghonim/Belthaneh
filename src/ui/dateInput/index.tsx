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
import 'moment/locale/ar'
import gregorian_en from 'react-date-object/locales/gregorian_en'
import gregorian_ar from 'react-date-object/locales/gregorian_ar'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const currentLang = router.locale
  let calendarLang = gregorian_en
  if (currentLang === 'ar') {
    calendarLang = gregorian_ar
  }
  return isForm ? (
    <Field name={name}>
      {({
        field,
        form: { errors, touched, setFieldValue, values }
      }: FieldProps) => {
        return (
          <div className="w-full relative">
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
              locale={calendarLang}
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
              containerClassName={`h-10 w-full  rounded-md border-dark-300  ${className}`}
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
                if (props?.onChange !== undefined) props?.onChange?.(dateObject)
                else {
                  setFieldValue(name, dateObject)
                }
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
    <div className="w-full relative">
      <DatePicker
        multiple={false}
        ref={ref}
        locale={calendarLang}
        render={
          <CustomCalendarButton
            {...props}
            className={className}
            date={props.value as string}
            placeholder={props?.placeholder}
            onClick={() => {
              ref?.current?.openCalendar()
            }}
          />
        }
        containerClassName={`h-10 w-full  rounded-md border-dark-300 ${className}`}
        inputClass={'bg-transparent h-10 w-full px-2'}
        className={'h-10 w-full '}
        {...props}
        name={name}
      />
    </div>
  )
}
export default DateInput

function CustomCalendarButton({
  date,
  onClick,
  placeholder,
  className = '',
  format = 'DD/MM/YYYY'
}: {
  placeholder?: string
  date: string
  onClick: () => void
  className?: string
  format?: string
}) {
  const router = useRouter()
  const currentLang = router.locale
  const [ssr, setSSR] = useState(true)
  useEffect(() => {
    setSSR(false)
  }, [])

  const splitDate = (index: number) => date?.toString().split(',')[index]
  const showDate = (index: number) => {
    const formattedDate = moment(splitDate(index))
      .locale(currentLang === 'ar' ? 'ar' : 'en-GB')
      .format(format)
    if (formattedDate === 'Invalid date') {
      return moment(splitDate(index), format)
        .locale(currentLang === 'ar' ? 'ar' : 'en-GB')
        .format(format)
    }
    return formattedDate
  }

  return (
    <div
      className={`border h-10 w-full dark:bg-transparent border-dark-300 rounded-md flex items-center ${className}`}
      onClick={onClick}
    >
      <Calendar className="stroke-dark-300 mx-2" />
      {!ssr && (
        <span className="flex items-center h-full">
          {showDate(0) ?? <span className="text-dark-300">{placeholder}</span>}
          {splitDate(1) !== undefined && showDate(1) !== 'Invalid date'
            ? ' - ' + showDate(1)
            : null}
        </span>
      )}
    </div>
  )
}
