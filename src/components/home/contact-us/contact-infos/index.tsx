import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Address from './location'
import ContactDetails from './details'

function ContactInfo() {
  const { t } = useTranslation('common')

  // Contact Info Head
  const InfoHead = ({ text }: { text: string }) => {
    return <h3 className="!text-[16px] text-[#1E1B1B] opacity-75">{text}</h3>
  }

  return (
    <div className="w-[38%] flex flex-col gap-8">
      <Address>
        <InfoHead text={t('address')} />
      </Address>
      <ContactDetails>
        <InfoHead text={t('contact_details')} />
      </ContactDetails>
      <div>
        <InfoHead text={t('commercial_register')} />
        <span className="font-bold text-lg">1010672966</span>
      </div>
    </div>
  )
}
export default ContactInfo
