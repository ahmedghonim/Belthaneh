import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import RoundedBox from 'ui/rounded-box'
import DetailsBox from 'ui/details-box'
import User from 'svg/user.svg'
import Phone from 'svg/phone.svg'
import Mail from 'svg/mail.svg'
import Location from 'svg/location.svg'

// dunmmy data
interface ClientDataProps {
  name: string
  phone: string
  mail: string
  shippingAddress: string
}

function ClientDetails({
  name,
  phone,
  mail,
  shippingAddress
}: ClientDataProps) {
  const { t } = useTranslation('common')
  return (
    <RoundedBox className="p-4">
      <h2 className="dark:text-white text-dark-100 mb-4 font-bold text-md">
        {t('Client_Details')}
      </h2>
      <ul className="flex flex-col gap-4">
        <DetailsBox
          icon={<User className="dark:stroke-white stroke-[#525252]" />}
          text={name}
          withIcon={true}
        />
        <DetailsBox
          icon={<Phone className="dark:fill-white stroke-[#525252]" />}
          text={phone}
          withIcon={true}
        />
        <DetailsBox
          icon={<Mail className="dark:fill-white stroke-[#525252]" />}
          text={mail}
          withIcon={true}
        />
      </ul>

      <h2 className="dark:text-white text-dark-100  font-bold text-md mb-4 mt-6">
        {t('Shipping_Address')}
      </h2>

      <ul>
        <DetailsBox
          icon={<Location className="dark:fill-white stroke-[#525252]" />}
          text={shippingAddress}
          withIcon={true}
        />
      </ul>
    </RoundedBox>
  )
}

export default ClientDetails
