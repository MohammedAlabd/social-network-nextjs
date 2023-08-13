import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const Home = function (_props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('common');
  return (
    <main>
      <Head>
        <h1 className="test-hello">{t('hello Team')}</h1>
        <h1 className="test-hello">{t('hellopeople')}</h1>
      </Head>
    </main>
  );
};

export default Home;
