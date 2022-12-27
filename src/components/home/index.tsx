import React from 'react'
import IntroSection from './intro-sec'
import WeAreSection from './we-are'
import Features from './features'
import GetStarted from './get-started'
import Benefits from './benefits'
import Footer from 'components/common/footer'

function HomeFC() {
  return (
    <div className="px-12 bg-[#F5F5F5]">
      <IntroSection />
      <div className="rounded-lg overflow-hidden bg-transparent">
        <WeAreSection />
        <Features />
        <GetStarted />
        <Benefits />
      </div>
      <Footer className="pt-28 !bg-gradient-to-r !from-transparent !to-transparent" />
    </div>
  )
}
export default HomeFC
