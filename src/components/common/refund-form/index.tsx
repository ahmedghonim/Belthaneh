import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import RefundInputs from './inputs'
import RefundItems from './invoice-items'
import { Text, Button } from 'ui'
import Cash from 'svg/cash.svg'
import Visa from 'svg/visa.svg'

export interface RecieptItemsType {
  serviceName: string
  amount: string | number
  price: string | number
  discount: string | number
  employer: string
  date: string
  id?: string
}

export interface RefundFormPropsType {
  data: RecieptItemsType[]
  show: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

function RefundForm({ data, show, onClose }: RefundFormPropsType) {
  const { t } = useTranslation('common')
  const [method, setMethod] = useState<string>('visa')

  const changeMethod = (id: string) => {
    setMethod(id)
  }

  return (
    <section
      className={`fixed top-0 left-0 ${
        show ? 'grid py-5' : 'hidden'
      } place-items-center z-50 w-full h-full overflow-auto sm:bg-dark-100 dark:bg-dark-100 bg-[#F5F5F5] sm:dark:!bg-opacity-80 sm:!bg-opacity-40`}
    >
      <div className="xs:w-full w-1/2 flex flex-col gap-6 p-6 xs:!bg-transparent  dark:bg-dark-200 bg-white rounded-lg">
        <div>
          <div>
            <Text as="h2" className="!mb-4">
              {t('invoice_refund')}
            </Text>
          </div>
          <RefundInputs />
        </div>
        <div>
          <Text as="h2" className="!mb-4">
            {t('refund_from')}
          </Text>
          <div className="flex gap-4">
            <Button
              primary={method === 'visa'}
              className={`${
                method !== 'visa' ? 'bg-transparent' : ''
              } gap-3 border border-primary-100`}
              onClick={() => changeMethod('visa')}
            >
              <Visa
                className={`${
                  method === 'visa' ? 'fill-white' : 'fill-primary-100'
                } scale-125`}
              />
              <span
                className={
                  method !== 'visa' ? 'text-primary-100' : 'text-white'
                }
              >
                {t('credit_card')}
              </span>
            </Button>
            <Button
              primary={method === 'cash'}
              className={`${
                method !== 'cash' ? 'bg-transparent' : ''
              } gap-3 border border-primary-100`}
              onClick={() => changeMethod('cash')}
            >
              <Cash
                className={`${
                  method === 'cash' ? 'fill-white' : 'fill-primary-100'
                } scale-100`}
              />
              <span
                className={
                  method !== 'cash' ? 'text-primary-100' : 'text-white'
                }
              >
                {t('cash')}
              </span>
            </Button>
          </div>
        </div>
        <RefundItems data={data} />
        <div className="flex justify-end gap-3">
          <Button className="bg-transparent" onClick={() => onClose(false)}>
            {t('cancel')}
          </Button>
          <Button primary className="px-5">
            {t('save')}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RefundForm
