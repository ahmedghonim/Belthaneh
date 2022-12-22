import CertificationForm from './form'
import { Form, Formik, FormikHelpers } from 'formik'
import Header from './header'
import CertificateList, { CertificateItemProps } from './certificate-list'
import { Modal } from 'ui'

// certifications dummy data

export interface CertificationInitialValuesProps {
  src: string
  name: string
  type: string
  number: number
  id: string
}

interface CertificationsProps {
  certificateData: CertificateItemProps[]
  onSubmit: (
    values: CertificationInitialValuesProps,
    helpers: FormikHelpers<CertificationInitialValuesProps>
  ) => void
  initialValues: CertificationInitialValuesProps | null
  handleCancel: () => void
  handleOpen: () => void
  openModal: boolean
}

function Certification({
  openModal,
  certificateData,
  onSubmit,
  initialValues,
  handleCancel,
  handleOpen
}: CertificationsProps) {
  const defaultValues = {
    src: '',
    name: '',
    type: '',
    number: 0,
    id: ''
  }

  return (
    <section className="flex flex-col gap-10">
      <div>
        <Header handleOpen={handleOpen} />
      </div>
      <CertificateList data={certificateData} />
      <Modal open={openModal} onClose={handleCancel}>
        <Formik
          onSubmit={onSubmit}
          initialValues={{ ...defaultValues, ...initialValues }}
        >
          <Form>
            <CertificationForm handleCancel={handleCancel} />
          </Form>
        </Formik>
      </Modal>
    </section>
  )
}

export default Certification
