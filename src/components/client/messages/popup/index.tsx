import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Formik, Form } from 'formik'
import { TextArea, Button, Text, Select } from 'ui'
import {
  FormInitialValuesType,
  FormPropsType
} from 'components/client/messages/types'

// formik initialValues
const formInitialValues: FormInitialValuesType = {
  messageType: 'name',
  subject: 'messageType',
  messageContent: 'messageContent'
}
// customer static message
const initialEnMessage: string =
  "Hi [First_Name], we just wanted to remind you that you have an appointment for [Service] with [Name] tomorrow at [Time]. We're looking forward to seeing you then! Please let us know right away if you need to reschedule. Thank you!"

const initialArMessage: string =
  'مرحبًا [First_Name] ، أردنا فقط تذكيرك بأن لديك موعدًا لـ [Service] مع [Name] غدًا في [Time]. نحن نتطلع إلى رؤيتك بعد ذلك! يرجى إخبارنا على الفور إذا كنت بحاجة إلى إعادة الجدولة. شكرًا لك!'

function MessagePopup({
  actionType,
  formType = '',
  show,
  formDir,
  onCancel
}: FormPropsType) {
  const { t } = useTranslation('common')

  // submit function
  const onSubmitFun = () => {}

  // client search function
  const clientSearchFun = () => {}

  // appointment search function
  const appointmentSearchFun = () => {}

  // offer search function
  const offerSearchFun = () => {}

  return (
    <section
      className={`${show ? '!grid' : '!hidden'}
     fixed z-50 top-0 left-0 w-full h-full  place-items-center bg-black dark:!bg-opacity-90 !bg-opacity-75 xs:px-5`}
    >
      <div className="xs:w-full sm:w-1/2 dark:bg-dark-200 bg-white sm:px-8 xs:px-4 py-10 rounded-lg">
        <Formik initialValues={{ formInitialValues }} onSubmit={onSubmitFun}>
          <Form className="flex flex-col !gap-8">
            <div>
              <Select
                isForm={true}
                name="messageType"
                label={t('client')}
                options={[]}
                onChange={clientSearchFun}
                placeholder={t('client')}
              />
            </div>
            {['appointment', 'offer'].includes(formType) ? (
              <div>
                <Select
                  isForm={true}
                  name="subject"
                  onChange={
                    formType === 'appointment'
                      ? appointmentSearchFun
                      : offerSearchFun
                  }
                  className="text-white"
                  label={
                    formType === 'appointment' ? t('appointment') : t('offer')
                  }
                  options={[]}
                  placeholder={
                    formType === 'appointment'
                      ? t('appointment')
                      : t('select_pack')
                  }
                />
              </div>
            ) : (
              ''
            )}

            <div>
              <TextArea
                isForm={actionType === 'mail'}
                name="messageContent"
                type="text"
                value={formDir ? initialEnMessage : initialArMessage}
                placeholder={t('type_your_message_here')}
                rows={8}
                disabled={actionType !== 'mail'}
              ></TextArea>
            </div>
            <div className="flex justify-end gap-6">
              <Button className="bg-transparent" onClick={onCancel}>
                <Text as="span">{t('cancel')}</Text>
              </Button>
              <Button
                primary={true}
                className="w-24 justify-center capitalize"
                type="submit"
              >
                <Text as="span" white={true}>
                  {t('send')}
                </Text>
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default MessagePopup
