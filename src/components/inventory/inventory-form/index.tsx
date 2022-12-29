import { Formik, Form, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Input, Select, Button, DateInput, Text } from 'ui'
import useSSR from 'hooks/useSSR'
import dynamic from 'next/dynamic'
import * as Yup from 'yup'
import InventoryUploadPhoto from './inventory-upload'
import { Options } from 'ui/select'

const QuillInput = dynamic(async () => await import('ui/quill-input'), {
  ssr: false
})

export interface FormValues {
  productName: string
  category: Options | null
  measure: Options | null
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
  categories: Options[]
  measures: Options[]
  onSubmit: (values: FormValues, helpers?: FormikHelpers<any>) => void
  handleCancel: () => void
}

export const defaultValues = {
  productName: '',
  measure: null,
  category: null,
  code: '',
  price: 0,
  amount: 0,
  stockQty: 0,
  reOrderQty: 0,
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
  const buttonName =
    initialValues != null && Object.keys(initialValues)?.length > 0
      ? t('edit_inventory')
      : t('add_inventory')

  return ssr ? (
    <Formik
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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
            <InventoryUploadPhoto />
          </div>
        </div>
        <Text className="self-start sm:block hidden">{t('inventory_msg')}</Text>
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
    </Formik>
  ) : (
    <></>
  )
}
