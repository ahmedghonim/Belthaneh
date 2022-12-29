import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import AnimatedButton from './animated-button'
import IntroSection from '../common/intro-sec'
import WeAreSection from './we-are'
import Features from './features'
import GetStarted from './get-started'
import Benefits from './benefits'
import ContactUs from './contact-us'
import DownloadApp from './download-app'
import Footer from 'components/common/footer'

function HomeFC({ onSubmit }: { onSubmit: () => void }) {
  const { t } = useTranslation('common')
  return (
    <div className="bg-[#F5F5F5]">
      <IntroSection>
        <div className="absolute top-[72%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AnimatedButton
            text={t('start_now')}
            className="w-[158px] h-[42px] !rounded-full"
          />
        </div>
      </IntroSection>
      <div className="px-9 -mt-6 relative z-10">
        <div className="light-shadow rounded-tr-lg rounded-tl-lg overflow-hidden">
          <WeAreSection />
          <Features />
          <GetStarted />
          <Benefits />
        </div>
        <DownloadApp />
      </div>
      <ContactUs onSubmit={onSubmit} />
      <Footer className="pt-28 !bg-gradient-to-r !from-transparent !to-transparent" />
    </div>
  )
}
export default HomeFC
