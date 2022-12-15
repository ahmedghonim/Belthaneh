import { Formik, Form, FormikHelpers, FormikHandlers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Input, Select, Button, DateInput, Upload, Text } from 'ui'
import useSSR from 'hooks/useSSR'
import dynamic from 'next/dynamic'
import ImgUpload from 'svg/img-upload.svg'
import * as Yup from 'yup'
import Image from 'next/image'

const QuillInput = dynamic(async () => await import('ui/quill-input'), {
  ssr: false
})

interface FieldItem {
  value: string
  label: string
}

export interface FormValues {
  productName: string
  category: FieldItem
  measure: FieldItem
  code: string
  price: number
  amount: number
  stockQty: number
  reOrderQty: number
  expireDate: Date | null | string
  description: string
  photo: string
}

export interface InventoryFormProps {
  initialValues?: FormValues | null
  categories: FieldItem[]
  measures: FieldItem[]
  onSubmit: (values: FormValues, helpers?: FormikHelpers<any>) => void
  handleCancel: () => void
}

export const defaultValues = {
  productName: '',
  measure: '',
  category: '',
  code: '',
  price: '',
  amount: '',
  stockQty: '',
  reOrderQty: '',
  expireDate: new Date().toDateString(),
  description: '',
  photo: ''
}

export default function InventoryForm({
  initialValues,
  onSubmit,
  categories,
  handleCancel,
  measures
}: InventoryFormProps) {
  const { t } = useTranslation('common')
  const buttonName = t('add_inventory')
  const { ssr } = useSSR()
  const validationSchema = Yup.object({
    productName: Yup.string().required(t('Required')),
    category: Yup.string()
      .trim()
      .nullable()
      .default(undefined)
      .transform((curr, orig) => (orig === '' ? null : curr))
      .required(t('Required')),
    code: Yup.string().required(t('Required')),
    price: Yup.string().required(t('Required')),
    amount: Yup.string().required(t('Required')),
    stockQty: Yup.string().required(t('Required')),
    reOrderQty: Yup.string().required(t('Required')),
    expireDate: Yup.string().required(t('Required')),
    measure: Yup.string()
      .trim()
      .nullable()
      .default(undefined)
      .transform((curr, orig) => (orig === '' ? null : curr))
      .required(t('Required'))
  })

  return ssr ? (
    <Formik
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        setFieldValue
      }: { values: FormValues } & FormikHelpers<any> & FormikHandlers) => (
        <Form className="flex flex-col gap-4 text-center">
          <div className="flex sm:flex-row  flex-col gap-5">
            <div className="flex flex-col flex-1 gap-5 text-start">
              <div className="flex gap-5 sm:flex-row flex-col">
                <Input
                  isForm
                  name="productName"
                  label={`${t('productName')}*`}
                  placeholder={t('productName')}
                />
                <Select
                  name={'category'}
                  options={categories}
                  className="w-full text-start"
                  placeholder={t('select_category')}
                  label={t('category')}
                  isForm
                />
              </div>

              <div className="flex gap-5 sm:flex-row flex-col">
                <Input
                  isForm
                  type="number"
                  name="code"
                  label={t('Inventory_code')}
                  placeholder={t('Inventory_code')}
                />
                <Input
                  isForm
                  type="number"
                  name="price"
                  label={t('Purchase_Price')}
                  placeholder={t('Purchase_Price')}
                />
              </div>
              <div className="flex gap-5 sm:flex-row flex-col">
                <Input
                  isForm
                  type="number"
                  name="amount"
                  label={t('amount')}
                  placeholder={t('amount')}
                />
                <Select
                  name={'measure'}
                  label={t('measure')}
                  options={measures}
                  className="w-full text-start"
                  placeholder={t('select_measure')}
                  isForm
                />
              </div>
              <div className="flex gap-5 sm:flex-row flex-col">
                <Input
                  isForm
                  type="number"
                  name="stockQty"
                  label={t('Low_stock_level')}
                  placeholder={t('Low_stock_level')}
                />
                <Input
                  isForm
                  type="number"
                  name="reOrderQty"
                  label={t('reOrderQty')}
                  placeholder={t('reOrderQty')}
                />
              </div>
              <div className="flex self-start w-full">
                <DateInput
                  format="DD/MM/YYYY"
                  isForm
                  className={'sm:!w-[250px] w-full'}
                  name="expireDate"
                  placeholder={t('expiry_Date')}
                  label={t('expiry_Date')}
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-5 h-full ">
              <QuillInput
                name={'description'}
                placeholder={t('Description')}
                label={t('Description')}
                isForm
                className="[&>*.ql-container.ql-snow]:h-[161px]"
              />
              <Upload
                className={`m-auto w-full rounded-xl ${
                  values?.photo !== '' ? 'border-0' : 'border-primary-100'
                }  p-8 relative h-[230px]`}
                name="photo"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  const file: File = (target.files as FileList)[0]
                  setFieldValue('photo', URL.createObjectURL(file))
                }}
                icon={
                  values?.photo !== '' ? (
                    <Image src={values.photo} alt={'upload'} fill />
                  ) : (
                    <ImgUpload className="sm:fill-primary-100" />
                  )
                }
                buttonText={
                  values?.photo === '' && (
                    <div className="w-full flex flex-col">
                      <Text>
                        {t('Drag_Your_Images')}{' '}
                        <span className="text-primary-100">{t('browse')}</span>
                      </Text>
                      <Text>{t('Upload_max_img')}</Text>
                    </div>
                  )
                }
              />
            </div>
          </div>
          <Text className="self-start sm:block hidden">
            {t('inventory_msg')}
          </Text>
          <div className="flex gap-4 sm:justify-end justify-between ">
            <Button
              onClick={handleCancel}
              className={'dark:text-white text-dark-300 bg-transparent'}
            >
              {t('cancel')}
            </Button>
            <Button
              type="submit"
              primary
              className="sm:font-bold py-2 px-4 font-[500]"
            >
              {buttonName}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  ) : (
    <></>
  )
}
