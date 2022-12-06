import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import TextAreaEditors from './text-area-editors'
import InputForm from 'ui/input'
import Button from 'ui/button'
import { Form, Formik } from 'formik'

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
  const submitForm = (): void => {}

  return (
    <section className="sm:dark:bg-[#1B1B1C] sm:bg-white sm:w-3/5 rounded-xl py-6 px-4">
      <h2 className="dark:text-white text-dark-100 font-bold">
        {t('basic_info')}
      </h2>
      <Formik initialValues={formValues} onSubmit={submitForm}>
        <Form className="flex justify-between flex-wrap xs:gap-2 gap-8 mt-8">
          <div className="flex xs:gap-2 gap-8 xs:flex-col w-full">
            <div className="flex-1">
              <InputForm
                name="productName"
                label={t('Product_Name')}
                placeholder={t('Enter_product_name')}
              />
            </div>
            <div className="flex-1">
              <InputForm
                name="brandName"
                label={t('Brand_Name')}
                placeholder={t('Enter_brand_name')}
              />
            </div>
          </div>
          <div className="flex gap-8 w-full">
            <div className="flex-1">
              <InputForm
                name="quantity"
                label={t('Product_Quantity')}
                type="number"
              />
            </div>
            <div className="flex-1">
              <InputForm
                name="price"
                label={t('pricing')}
                type="number"
                placeholder={t('Enter_product_price')}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label
                htmlFor="#product-description"
                className="dark:text-white text-dark-100"
              >
                {t('Description')}
              </label>
            </div>
            <div className="rounded-md mt-2 xs:border border-dark-300">
              <TextAreaEditors className="sm:hidden justify-center py-3 border-b-2 border-dark-300" />
              <textarea
                className="bg-transparent w-full resize-none py-3 px-5 sm:border border-dark-300 rounded-md text-dark-300 placeholder:text-sm placeholder:text-dark-300"
                name="description"
                id="product-description"
                placeholder={t('Insert_text_here')}
                rows={6}
              ></textarea>
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
