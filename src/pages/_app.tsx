import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider session={pageProps.session} >
      <Component {...pageProps}/>
    </SessionProvider>
  )

export default appWithTranslation(MyApp)
