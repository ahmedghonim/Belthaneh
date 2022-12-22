import CustodyTable, { CustodySingleObjectType } from './table'
import CustodyBox from './custody-mobile-list'
import CustodyForm from './form'
import Header from './header'
import { Form, Formik, FormikHelpers } from 'formik'
import { Modal } from 'ui'

// custody dummy data

export interface CustodyInitialValuesProps {
  custody: string
  category: string
  price: number
  amount: number
  date: Date
}
export interface CustodyProps {
  onSubmit: (
    values: CustodyInitialValuesProps,
    helpers: FormikHelpers<CustodyInitialValuesProps>
  ) => void
  initialValues: CustodyInitialValuesProps | null
  custodyData: CustodySingleObjectType[]
  handleCancel: () => void
  handleOpen: () => void
  openModal: boolean
}
function Custody({
  onSubmit,
  initialValues,
  custodyData,
  handleCancel,
  handleOpen,
  openModal
}: CustodyProps) {
  const defaultValues: CustodyInitialValuesProps = {
    custody: '',
    category: '',
    price: 0,
    amount: 0,
    date: new Date()
  }
  return (
    <section className="flex flex-col gap-5">
      <Header handleOpen={handleOpen} />
      <div>
        <CustodyTable data={custodyData} />
        <CustodyBox data={custodyData} />
      </div>
      <Modal open={openModal} onClose={handleCancel}>
        <Formik
          initialValues={{ ...defaultValues, ...initialValues }}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-5 w-full">
            <CustodyForm handleCancel={handleCancel} />
          </Form>
        </Formik>
      </Modal>
    </section>
  )
}

export default Custody
