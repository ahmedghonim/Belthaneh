import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import useTranslation from 'next-translate/useTranslation'
import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'react-phone-input-2/lib/style.css'
import { ThemeProvider } from 'next-themes'
import LayoutProvider from 'components/main-layout'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

export default function App({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation()
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </ThemeProvider>
    </Provider>
  )
}
