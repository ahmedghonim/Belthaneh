import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Form, Formik } from 'formik'
import dynamic from 'next/dynamic'
import { Input, Button } from 'ui'

const QuillInput = dynamic(async () => await import('ui/quill-input'), {
  ssr: false
})

interface FormValues {
  productName: string
  brandName: string
  quantity: string
  price: string
  description: String
}

function BasicInfo() {
  const { t } = useTranslation('common')

  const formValues: FormValues = {
    productName: 'productName',
    brandName: 'brandName',
    quantity: 'quantity',
    price: 'price',
    description: 'description'
  }

  // Submit button Functionality
  const submitForm = () => {}

  return (
    <section className="sm:dark:bg-[#1B1B1C] sm:bg-white sm:w-3/5 rounded-xl py-6 px-4">
      <h2 className="dark:text-white text-dark-100 font-bold">
        {t('basic_info')}
      </h2>
      <Formik initialValues={formValues} onSubmit={submitForm}>
        <Form className="flex justify-between flex-wrap xs:gap-2 gap-8 mt-8">
          <div className="flex xs:gap-2 gap-8 xs:flex-col w-full">
            <div className="flex-1">
              <Input
                name="productName"
                label={t('Product_Name')}
                placeholder={t('Enter_product_name')}
              />
            </div>
            <div className="flex-1">
              <Input
                name="brandName"
                label={t('Brand_Name')}
                placeholder={t('Enter_brand_name')}
              />
            </div>
          </div>
          <div className="flex gap-8 w-full">
            <div className="flex-1">
              <Input
                name="quantity"
                label={t('Product_Quantity')}
                type="number"
              />
            </div>
            <div className="flex-1">
              <Input
                name="price"
                label={t('pricing')}
                type="number"
                placeholder={t('Enter_product_price')}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-md mt-2 xs:border border-dark-300">
              <QuillInput
                name={'description'}
                placeholder={t('Description')}
                label={t('Description')}
                isForm
                className="[&>*.ql-container.ql-snow]:h-[161px]"
              />
            </div>
          </div>
          <div className="xs:hidden w-full flex justify-end gap-8">
            <Button type="reset" className="bg-transparent text-primary-100">
              {t('Cancel')}
            </Button>
            <Button type="submit" primary={true}>
              <span>{t('add_product')}</span>
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  )
}
export default BasicInfo
