import AbsenceBox from './absence-mobile-list'
import AbsenceTable, { AbsenceItemDataProps } from './absence-table'
import AbsenceForm from './form'
import { Form, Formik, FormikHelpers } from 'formik'
import Header from './header'
import { Modal } from 'ui'

// absence dummy data

export interface AbsenceInitialValues {
  date: Date
  period: number
  type: string
  reason: string
}

export interface AbsenceProps {
  absenceData: AbsenceItemDataProps[]
  onSubmit: (
    values: AbsenceInitialValues,
    helpers: FormikHelpers<AbsenceInitialValues>
  ) => void
  onCancel: () => void
  handleOpen: () => void
  openModal: boolean
  initialValues: AbsenceInitialValues | null
}
function Absence({
  initialValues,
  absenceData,
  onSubmit,
  openModal,
  onCancel,
  handleOpen
}: AbsenceProps) {
  const defaultValues: AbsenceInitialValues = {
    date: new Date(),
    period: 0,
    type: '',
    reason: ''
  }

  return (
    <section className="flex flex-col gap-5">
      <Header handleOpen={handleOpen} />
      <div>
        <AbsenceTable data={absenceData} />
        <AbsenceBox data={absenceData} />
      </div>
      <Modal open={openModal} onClose={onCancel}>
        <Formik
          initialValues={{ ...defaultValues, ...initialValues }}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-5 w-full">
            <AbsenceForm onCancel={onCancel} />
          </Form>
        </Formik>
      </Modal>
    </section>
  )
}

export default Absence
