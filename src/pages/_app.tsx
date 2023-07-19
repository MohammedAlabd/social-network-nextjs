import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} >
      <Component {...pageProps}/>
    </SessionProvider>
  )
}
