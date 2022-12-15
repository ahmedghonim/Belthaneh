import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import { Form, Formik } from 'formik'
import { Input, Button, Text } from 'ui'
import {
  PurchasesFormProps,
  PurchasedItemsType
} from 'components/accounting/purchase/type'
import SalesUploadImgBox from 'components/accounting/upload-img'
import Delete from 'svg/trash.svg'

const QuillInput = dynamic(async () => await import('ui/quill-input'), {
  ssr: false
})

// formik initial values
const initialValues = {
  type: '',
  clause: '',
  item: '',
  unitPrice: '',
  productCost: '',
  qty: '',
  price: '',
  source: '',
  date: '',
  recipient: '',
  invoiceNum: '',
  supplierNum: '',
  cost: '',
  discount: '',
  vat: '',
  totalCost: '',
  paid: '',
  description: ''
}

function PurchasesForm({ show, hideFun }: PurchasesFormProps) {
  const [purchasedItems, setPurchasedItems] = useState<PurchasedItemsType[]>([])
  const [addProduct, setAddProduct] = useState<PurchasedItemsType>({
    item: '',
    unitPrice: 0,
    cost: 0,
    QTY: '',
    Price: 0
  })

  const { t } = useTranslation('common')
  //   submit function
  const onSubmit = () => {}

  // on delete product
  const deleteItem = (item: string | number) => {
    const filteredProducts = purchasedItems.filter((product) => {
      return product.item !== item
    })
    setPurchasedItems(filteredProducts)
  }

  // on add product
  const addItem = () => {
    setPurchasedItems([...purchasedItems, addProduct])
  }

  return (
    <section
      className={`fixed top-0 left-0 w-full h-full overflow-auto z-50 place-items-center sm:bg-dark-100 dark:bg-dark-100 bg-[#F5F5F5] sm:!bg-opacity-50 ${
        show ? 'grid py-5' : 'hidden'
      }`}
    >
      <div className="sm:w-2/3 w-[95%] xs:!bg-transparent  dark:bg-dark-200 bg-white p-4 rounded-lg">
        <div className="mb-4">
          <Text as="h1">{t('add_purchases')}</Text>
        </div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="flex flex-col gap-4">
            <div className="flex xs:flex-col">
              <div className="xs:w-full w-1/3 flex sm:justify-center px-4 xs:mb-4">
                <SalesUploadImgBox />
              </div>
              <div className="flex flex-col flex-1 gap-4">
                <div className="w-full flex xs:flex-col gap-4">
                  <div className="flex-1">
                    <Input name="type" label={t('type')} />
                  </div>
                  <div className="flex-1">
                    <Input name="clause" label={t('clause_title')} />
                  </div>
                </div>
                <div className="w-full flex xs:flex-col gap-4">
                  <div className="flex-1">
                    <Input name="source" label={t('account_source')} />
                  </div>
                  <div className="flex-1">
                    <Input name="date" label={t('date')} />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6">
              <div className="flex xs:flex-wrap justify-between gap-3">
                <div className="xs:w-full">
                  <Input
                    name="item"
                    label={t('item')}
                    onChange={(e: any) =>
                      setAddProduct({ ...addProduct, item: e.target.value })
                    }
                  />
                </div>
                <div className="xs:w-[48%]">
                  <Input
                    name="unitPrice"
                    label={t('unit_price')}
                    onChange={(e: any) =>
                      setAddProduct({
                        ...addProduct,
                        unitPrice: e.target.value
                      })
                    }
                  />
                </div>
                <div className="xs:w-[48%]">
                  <Input
                    name="productCost"
                    label={t('cost')}
                    onChange={(e: any) =>
                      setAddProduct({ ...addProduct, cost: e.target.value })
                    }
                  />
                </div>
                <div className="xs:w-[48%]">
                  <Input
                    name="qty"
                    label={t('qty')}
                    onChange={(e: any) =>
                      setAddProduct({ ...addProduct, QTY: e.target.value })
                    }
                  />
                </div>
                <div className="xs:w-[48%]">
                  <Input
                    name="price"
                    label={t('price')}
                    onChange={(e: any) =>
                      setAddProduct({ ...addProduct, Price: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col xs:w-full items-center xs:!items-end gap-2">
                  <span className="xs:hidden">{t('actions')}</span>
                  <Button primary className="xs:!px-6" onClick={addItem}>
                    {t('add')}
                  </Button>
                </div>
              </div>
              <div>
                {purchasedItems.length !== 0
                  ? purchasedItems.map((product) => {
                      return (
                        <div key={product.item} className="flex mt-4 gap-3">
                          <span className="flex-1">{product.item}</span>
                          <span className="flex-1">{product.unitPrice}$</span>
                          <span className="flex-1">{product.cost}$</span>
                          <span className="flex-1">{product.QTY}</span>
                          <span className="flex-1">{product.Price}$</span>
                          <span
                            onClick={() => deleteItem(product.item)}
                            className="cursor-pointer xs:hidden"
                          >
                            <Delete />
                          </span>
                        </div>
                      )
                    })
                  : ''}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="xs:w-full flex-1">
                <Input name="recipient" label={t('recipient')} />
              </div>
              <div className="xs:w-full flex-1">
                <Input
                  name="invoiceNum"
                  label={t('invoice_no')}
                  type="number"
                />
              </div>
              <div className="xs:w-full flex-1">
                <Input
                  name="supplierNum"
                  label={t('supplier_no')}
                  type="number"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="xs:w-[48%]">
                <Input name="cost" label={t('cost')} type="number" />
              </div>
              <div className="xs:w-[48%]">
                <Input name="discount" label={t('discount')} type="number" />
              </div>
              <div className="xs:w-[48%]">
                <Input name="vat" label={t('vat')} type="number" />
              </div>
              <div className="xs:w-[48%]">
                <Input name="totalCost" label={t('total_cost')} type="number" />
              </div>
              <div className="xs:w-[48%]">
                <Input name="paid" label={t('paid')} type="number" />
              </div>
            </div>
            <QuillInput
              name={'description'}
              placeholder={t('insert_text_here')}
              label={t('Description')}
              isForm
              className="[&>*.ql-container.ql-snow]:h-[120px]"
            />
            <div className="flex w-full justify-end gap-6">
              <Button
                className="bg-transparent"
                onClick={() => hideFun(false)}
                type="reset"
              >
                {t('cancel')}
              </Button>
              <Button primary className="px-12">
                {t('add')}
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default PurchasesForm
