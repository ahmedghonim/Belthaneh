import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import useTranslation from 'next-translate/useTranslation'
import { Form, Formik } from 'formik'
import {
  AddExpencessFormPropsType,
  ExpensesFormInitialValues
} from 'components/accounting/expenses/type'
import { Input, Text, Button, Select } from 'ui'
import SalesUploadImgBox from 'components/accounting/upload-img'

const QuillInput = dynamic(async () => await import('ui/quill-input'), {
  ssr: false
})

function AddExpencessForm({
  show,
  type,
  dataObj,
  hideFun
}: AddExpencessFormPropsType) {
  const { t } = useTranslation('common')
  // formik prerequisites
  const initialValues: ExpensesFormInitialValues = {
    type: '',
    clause: '',
    source: '',
    date: '',
    price: '',
    discount: '',
    paid: '',
    vat: '',
    recipient: '',
    invoiceNum: '',
    description: ''
  }

  const onSubmit = () => {}

  // expenses options
  const expensesTypeOptions = [
    { value: 'rent', label: t('rent_ex') },
    { value: 'electricity', label: t('electricity_ex') },
    { value: 'communication', label: t('communication_ex') },
    { value: 'salary', label: t('salary_ex') },
    { value: 'cleaning', label: t('cleaning_ex') },
    { value: 'transportation', label: t('transportation_ex') },
    { value: 'maintenance', label: t('maintenance_ex') },
    { value: 'govermmental', label: t('govermmental_ex') },
    { value: 'marketing', label: t('marketing_ex') },
    { value: 'administrative', label: t('administrative_ex') },
    { value: 'hospitality', label: t('hospitality_ex') },
    { value: 'equipmentAndDevices', label: t('equipment_ex') },
    { value: 'water', label: t('water_ex') },
    { value: 'other', label: t('other_ex') }
  ]

  // account sources options
  const accountResourcesOptions = [
    { value: 'accountant', label: t('accountant') },
    { value: 'ownerAccount', label: t('owner_account') },
    { value: 'fundCustody', label: t('fund_custody') },
    { value: 'bank_account', label: t('bank_account') },
    { value: 'other', label: t('other') }
  ]
  return (
    <section
      className={`fixed top-0 left-0 w-full h-full overflow-auto z-50 place-items-center sm:bg-dark-100 dark:bg-dark-100 bg-[#F5F5F5] sm:dark:!bg-opacity-80 sm:!bg-opacity-40 ${
        show ? 'grid py-5' : 'hidden'
      }`}
    >
      <div className="w-2/3 xs:w-[95%] xs:!bg-transparent  dark:bg-dark-200 bg-white rounded-lg p-5 pb-10">
        <Text as="h1" className="mb-4">
          {t('add_expenses')}
        </Text>
        <div className="flex xs:flex-col gap-4">
          <div className="w-2/3 xs:w-full">
            <SalesUploadImgBox
              className={type === 'edit' ? 'hidden' : 'block'}
            />
            <Image
              height={100}
              width={100}
              src={type === 'edit' ? (dataObj.src as string) : ''}
              alt={t('invoice')}
              className={type !== 'edit' ? 'hidden' : 'block w-full h-full'}
            />
          </div>
          <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className="flex flex-wrap gap-4">
                <div className="w-full flex gap-4">
                  <div className="flex-1">
                    <Select
                      name="type"
                      label={t('type')}
                      placeholder={t('select')}
                      options={expensesTypeOptions}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      name="clause"
                      label={t('clause_title')}
                      value={type === 'edit' ? dataObj.clause : ''}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4">
                  <div className="flex-1">
                    <Select
                      name="source"
                      label={t('account_source')}
                      options={accountResourcesOptions}
                      placeholder={t('select')}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      name="date"
                      label={t('date')}
                      value={type === 'edit' ? dataObj.date : ''}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4">
                  <div className="flex-1">
                    <Input
                      name="price"
                      label={t('price')}
                      type="number"
                      value={type === 'edit' ? dataObj.price : ''}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      name="discount"
                      label={t('discount')}
                      type="number"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4">
                  <div className="flex-1">
                    <Input
                      name="paid"
                      label={t('paid')}
                      type="number"
                      value={type === 'edit' ? dataObj.paid : ''}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      name="vat"
                      label={t('vat')}
                      type="number"
                      value={type === 'edit' ? dataObj.vat : ''}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4">
                  <div className="flex-1">
                    <Input
                      name="recipient"
                      label={t('recipient')}
                      value={type === 'edit' ? dataObj.recipient : ''}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      name="invoiceNum"
                      label={t('invoice_no')}
                      type="number"
                      value={type === 'edit' ? dataObj.invoiceNum : ''}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <QuillInput
                    name={'description'}
                    placeholder={t('insert_text_here')}
                    label={t('Description')}
                    isForm
                    className="[&>*.ql-container.ql-snow]:h-[120px]"
                  />
                </div>
                <div className="flex w-full justify-end gap-6">
                  <Button className="bg-transparent" onClick={hideFun}>
                    {t('cancel')}
                  </Button>
                  <Button primary className="px-12">
                    {type === 'edit' ? t('edit') : t('add')}
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddExpencessForm
