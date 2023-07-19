import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  return (
    <main>
      <Head>
        <h1 className="test-hello">{t('hello Team')}</h1>
      </Head>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common'
    ])),
  },
})

export default Home