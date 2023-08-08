import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const {status, data} = useSession();

  return (
    <main>
      <Navbar authData={data} authStatus={status} />
    <Head>
      {/* <h1 className="test-hello">hello Team</h1> */}
    </Head>
  </main>
  )
}
