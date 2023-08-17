import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CreatPost from './CreatPost';
import Post from './Posts';
import { UserType } from './usersDummyData';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default function Index() {
  const user: UserType = {
    id: 1,
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
  };
  return (
    <div>
      <CreatPost user={user} />
      <Post />
    </div>
  );
}
