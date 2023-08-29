import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Bloglist from '@/comps/blogList';
import { useState } from 'react';
import getFormattedDate from '@/lib/getFormattedDate';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const Home = function (_props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('common');
  const [blogs] = useState([
    {
      title: 'How to become better programer',
      body: 'You can find many ways to be better programmer and here some of it',
      author: 'Moe',
      id: 1,
      date: getFormattedDate(new Date()),
    },
    {
      title: 'Most popular books about coding',
      body: 'Learn how to code by practice',
      author: 'Ahmed',
      id: 2,
      date: getFormattedDate(new Date()),
    },
    {
      title: 'How to write clean code',
      body: 'Clean code need a lot of time and l',
      author: 'Ali',
      id: 3,
      date: getFormattedDate(new Date()),
    },
  ]);

  return (
    <main>
      <Head>
        <h1 className="test-hello">{t('hello Team')}</h1>
        <h1 className="test-hello">{t('hellopeople')}</h1>
      </Head>
      <Bloglist blogs={blogs} />
    </main>
  );
};

export default Home;
