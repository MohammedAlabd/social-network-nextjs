import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
)
export default appWithTranslation(MyApp)
