import OffenceForm from './form'
import Header from './header'
import { Form, Formik, FormikHelpers } from 'formik'
import OffenseList, { OffenseItem } from './offense-list'
import OffenseListMobile from './offense-list-mobile'
import { Modal } from 'ui'

// offences dummy data

export interface OffenseInitialValues {
  id: string
  title: string
  date: Date
  category: string
  type: string
}
interface OffenseDataProps {
  onSubmit: (
    values: OffenseInitialValues,
    helpers: FormikHelpers<OffenseInitialValues>
  ) => void
  onCancel: () => void
  handleOpen: () => void
  offensesData: OffenseItem[]
  initialValues: null | OffenseInitialValues
  openModal: boolean
}
const defaultValues = {
  id: '',
  title: '',
  date: new Date(),
  category: '',
  type: ''
}

function Offense({
  onSubmit,
  onCancel,
  offensesData,
  handleOpen,
  initialValues,
  openModal
}: OffenseDataProps) {
  return (
    <section className="flex flex-col gap-8">
      <Header handleOpen={handleOpen} />
      <OffenseList data={offensesData} />
      <OffenseListMobile data={offensesData} />
      <Modal open={openModal} onClose={onCancel}>
        <Formik
          initialValues={{ ...defaultValues, ...initialValues }}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-5 w-full">
            <OffenceForm onCancel={onCancel} />
          </Form>
        </Formik>
      </Modal>
    </section>
  )
}

export default Offense
