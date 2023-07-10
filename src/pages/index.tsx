import Head from 'next/head';

export default function Home() {
  console.log('hello Team');
  return (
    <main>
      <Head>
        <h1 className="test-hello">hello Team</h1>
      </Head>
    </main>
  )
}
