import { Form, Formik } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import DateInput from 'ui/dateInput'
import Select, { Options } from 'ui/select'

interface Props {
  onSubmit: () => void
}

function SearchForm({ onSubmit }: Props) {
  const { t } = useTranslation('common')
  const searchOptions: Options[] = [
    {
      label: t('most'),
      value: 'ddd'
    },
    {
      label: t('less'),
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
          <Form className="flex gap-5 w-2/5 xs:w-full">
            <DateInput label="dd" name="date" className="flex-1" />
            <Select
              className="flex-1"
              options={searchOptions}
              placeholder={t('select')}
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
