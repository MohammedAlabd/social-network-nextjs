import LoginBtn from '@/components/login-btn';
import Head from 'next/head';

  const { t} = useTranslation('common')
  
  return (
    <main>
    <Head>
      <h1 className="test-hello">hello Team</h1>
    </Head>
    <LoginBtn />
  </main>
  )

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