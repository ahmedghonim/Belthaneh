import React, { useEffect, useRef } from 'react'
import type { AppProps } from 'next/app'
import useTranslation from 'next-translate/useTranslation'
import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'react-phone-input-2/lib/style.css'
import { ThemeProvider } from 'next-themes'
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import LayoutProvider from 'components/main-layout'

export default function App({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation()
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const queryClint = useRef(new QueryClient())
  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])
  return (
    <QueryClientProvider client={queryClint.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider enableSystem attribute="class">
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}
