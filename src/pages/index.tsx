import Head from 'next/head';
import '@/styles/globals.css';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';

const Home = function (_props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('common');
  const {status, data} = useSession();
  return (
    <main>
      <Navbar authData={data} authStatus={status} />
      <Head>
        <h1 className="test-hello">{t('hello Team')}</h1>
        <h1 className="test-hello">{t('hellopeople')}</h1>
      </Head>
    </main>
  );
  }
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Home;
