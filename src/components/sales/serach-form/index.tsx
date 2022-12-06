import { Form, Formik } from 'formik'
import React from 'react'
import DateInput from 'ui/dateInput'
import Select, { Options } from 'ui/select'

interface Props {
  onSubmit: () => void
}

function SearchForm({ onSubmit }: Props) {
  const searchOptions: Options[] = [
    {
      label: 'Most',
      value: 'ddd'
    },
    {
      label: 'less',
      value: 'dd'
    }
  ]
  return (
    <Formik
      initialValues={{ date: new Date(), search: '' }}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form className="flex gap-5 w-2/5">
            <DateInput label="dd" name="date" className="flex-1" />
            <Select
              className="flex-1"
              options={searchOptions}
              onChange={(val) => setFieldValue('search', val)}
              value={values.search}
              name={'search'}
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SearchForm
