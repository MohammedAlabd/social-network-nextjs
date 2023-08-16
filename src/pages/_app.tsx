import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
);

export default appWithTranslation(MyApp);
