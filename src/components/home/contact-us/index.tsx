import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import ContactForm from './form'
import ContactInfo from './contact-infos'

function ContactUs({ onSubmit }: { onSubmit: () => void }) {
  const { t } = useTranslation('common')
  return (
    <section className="py-[80px]">
      <div className="w-[70.5%] m-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t('contact_us')}
        </h2>
        <div className="flex justify-between items-center w-full">
          <div className="w-[45%]">
            <h2 className="mb-[37px] text-3xl font-bold text-black uppercase">
              {t('contact_form')}:
            </h2>
            <ContactForm onSubmit={onSubmit} />
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
