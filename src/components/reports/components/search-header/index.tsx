import { Form, Formik } from 'formik'
import useScreen from 'hooks/useScreen'
import moment from 'moment'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, DateInput, Select } from 'ui'

interface initialValuesProps {
  date: Date[] | string[]
  select: string
}

const startDate = moment().format('DD/MM/YYYY')

const initialValues: initialValuesProps = {
  date: [startDate, startDate],
  select: ''
}
function SearchHeader() {
  const screen = useScreen()
  const options = [
    {
      label: 'Most Demanded',
      value: 'most_demanded'
    }
  ]
  const { t } = useTranslation('common')
  function onSubmit(values: initialValuesProps) {
    values.date[0].toString()
    values.date[1].toString()
  }
  return (
    <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
      <Form className="flex justify-between xs:flex-col xs:items-end xs:gap-5">
        <div className="w-2/4 flex gap-5 xs:w-full">
          <DateInput
            isForm
            format="DD/MM/YYYY"
            numberOfMonths={screen !== 'phone' ? 2 : 1}
            name="date"
            range
            maxDate={new Date()}
          />
          <Select isForm name="select" options={options} />
        </div>

        <Button primary>{t('search')}</Button>
      </Form>
    </Formik>
  )
}

export default SearchHeader
