import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Bloglist from '@/comps/blogList';
import { useState } from 'react';
import { blogsData } from '@/lib/blogData';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const Home = function (_props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('common');
  const [blogs] = useState(blogsData);

  return (
    <main>
      <Head>
        <h1 className="test-hello">{t('hello Team')}</h1>
        <h1 className="test-hello">{t('hellopeople')}</h1>
      </Head>
      <Bloglist blogsList={blogs} />
    </main>
  );
};

export default Home;
