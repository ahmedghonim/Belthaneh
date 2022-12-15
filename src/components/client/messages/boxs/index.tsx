import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { MessageBoxsType, BoxType } from 'components/client/messages/types'
import Box from './box'
import User from 'svg/new-user.svg'
import AppointmentConfirm from 'svg/appointment-confirm.svg'
import AppointmentRemainder from 'svg/appointment-remainder.svg'
import AppointmentReschedul from 'svg/appointment-reschedul.svg'
import AppointmentCancel from 'svg/appointment-cancel.svg'
import SandClock from 'svg/sand-clock.svg'
import SadFace from 'svg/sad-face.svg'
import Offers from 'svg/offers.svg'
import Clock from 'svg/clock.svg'
import Return from 'svg/return.svg'
import Review from 'svg/request-review.svg'
import Notify from 'svg/notify.svg'

function MessagesBoxs({ onClickFun, formDir }: MessageBoxsType) {
  const { t } = useTranslation('common')

  const messagesBoxs: BoxType[] = [
    {
      mainData: {
        icon: <User className="scale-125 dark:fill-white fill-black" />,
        formType: 'welcome'
      },
      frontData: {
        boxTitle: t('new_user_welcome'),
        boxDesc: t(
          'notifies_clients_reminding_them_of_their_upcoming_appointment'
        )
      },
      backData: {
        boxTitle: t('الترحيب_بعميل_جديد'),
        boxDesc: t('إخطار_العملاء_بموعدهم_القادم')
      }
    },
    {
      mainData: {
        icon: (
          <AppointmentRemainder className="scale-125 dark:fill-white fill-black" />
        ),
        formType: 'appointment'
      },
      frontData: {
        boxTitle: t('appointment_confirmations'),
        boxDesc: t(
          'notifies_clients_reminding_them_of_their_upcoming_appointment'
        )
      },
      backData: {
        boxTitle: t('تأكيد_الموعد'),
        boxDesc: t('إخطار_العملاء_بموعدهم_القادم')
      }
    },
    {
      mainData: {
        icon: (
          <AppointmentConfirm className="scale-125 dark:fill-white fill-black" />
        ),
        formType: 'appointment'
      },
      frontData: {
        boxTitle: t('appointment_reminders'),
        boxDesc: t(
          'notifies_clients_reminding_them_of_their_upcoming_appointment'
        )
      },
      backData: {
        boxTitle: t('تذكير_بالموعد'),
        boxDesc: t('إخطار_العملاء_بموعدهم_القادم')
      }
    },
    {
      mainData: {
        icon: (
          <AppointmentReschedul className="scale-125 dark:fill-white fill-black" />
        ),
        formType: 'appointment'
      },
      frontData: {
        boxTitle: t('reschedule_appointment'),
        boxDesc: t(
          'notifies_clients_reminding_them_of_their_upcoming_appointment'
        )
      },
      backData: {
        boxTitle: t('اعادة_جدولة_الموعد'),
        boxDesc: t('إخطار_العملاء_بموعدهم_القادم')
      }
    },
    {
      mainData: {
        icon: (
          <SandClock className="scale-125  dark:stroke-white stroke-black" />
        ),
        formType: 'appointment'
      },
      frontData: {
        boxTitle: t('book_waiting_list_appointments'),
        boxDesc: t(
          'notifies_clients_reminding_them_of_their_upcoming_appointment'
        )
      },
      backData: {
        boxTitle: t('موعد_قائمة_انتظار_الحجز'),
        boxDesc: t('يرسل_تلقائيا_عند_الحجز')
      }
    },
    {
      mainData: {
        icon: <SadFace className="scale-125 dark:fill-white fill-black" />,
        formType: 'appointment'
      },
      frontData: {
        boxTitle: t('did_not_show_up'),
        boxDesc: t(
          'automatically_sends_to_clients_when_an_appointment_is_marked_as_a_no_show'
        )
      },
      backData: {
        boxTitle: t('العميل_لم_يظهر'),
        boxDesc: t('يتم_ارساله_تلقائيا_عند_عدم_ظهور_العميل_للموعد')
      }
    },
    {
      mainData: {
        icon: <Offers className="scale-125 dark:fill-white fill-black" />,
        formType: 'offer'
      },
      frontData: {
        boxTitle: t('special_offers'),
        boxDesc: t('automatically_sends_to_clients_when_to_give_special_offer')
      },
      backData: {
        boxTitle: t('عروض_خاصة'),
        boxDesc: t('يتم_ارسالها_عند_اعطاء_العميل_عرض_خاص')
      }
    },
    {
      mainData: {
        icon: <Clock className="scale-125 dark:fill-white fill-black" />,
        formType: 'offer'
      },
      frontData: {
        boxTitle: t('promote_special_events'),
        boxDesc: t(
          'automatically_sends_to_clients_when_promoting_to_special_events'
        )
      },
      backData: {
        boxTitle: t('الترويج_للمناسبات'),
        boxDesc: t('يتم_ارسالها_للعملاء_للترويج_عن_مناسبات_خاصة')
      }
    },
    {
      mainData: {
        icon: <Return className="scale-125 dark:fill-white fill-black" />,
        formType: 'welcome'
      },
      frontData: {
        boxTitle: t('remind_clients_to_rebook'),
        boxDesc: t(
          'automatically_sends_to_clients_when_an_appointment_is_checked_out'
        )
      },
      backData: {
        boxTitle: t('تذكير_العملاء_بإعادة_الحجز'),
        boxDesc: t('إخطار_العملاء_بموعدهم_القادم')
      }
    },
    {
      mainData: {
        icon: (
          <AppointmentCancel className="scale-125 dark:fill-white fill-black" />
        ),
        formType: 'appointment'
      },
      frontData: {
        boxTitle: t('cancelled_appointment'),
        boxDesc: t(
          'automatically_sends_to_clients_when_an_appointment_is_canceled'
        )
      },
      backData: {
        boxTitle: t('إلغاء_موعد'),
        boxDesc: t('يتم_ارسال_رسالة_للعميل_عند_الغاء_الموعد')
      }
    },
    {
      mainData: {
        icon: <Review className="scale-125 dark:fill-white fill-black" />,
        formType: 'appointment'
      },
      frontData: {
        boxTitle: t('request_a_review'),
        boxDesc: t(
          'automatically_sends_to_clients_when_their_review_appointment'
        )
      },
      backData: {
        boxTitle: t('طلب_تقييم'),
        boxDesc: t('يتم_ارسال_رسالة_للعميل_لطلب_تقييم_المقابلة')
      }
    },
    {
      mainData: {
        icon: <Notify className="scale-125 dark:fill-white fill-black" />,
        formType: 'welcome'
      },
      frontData: {
        boxTitle: t('notify'),
        boxDesc: t(
          'automatically_sends_to_clients_when_their_review_appointment'
        )
      },
      backData: {
        boxTitle: t('إشعار'),
        boxDesc: t('يتم_ارسال_رسالة_للعميل_لطلب_تقييم_المقابلة')
      }
    }
  ]

  return (
    <section className="grid xs:grid-cols-1 grid-cols-4 gap-8 mt-5">
      {messagesBoxs.map(({ mainData, frontData, backData }) => {
        return (
          <Box
            key={frontData.boxDesc}
            mainData={mainData}
            frontData={frontData}
            backData={backData}
            onClickFun={onClickFun}
            formDir={formDir}
          />
        )
      })}
    </section>
  )
}
export default MessagesBoxs
