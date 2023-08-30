import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CreatPost from './CreatPost';
import Posts from './Posts';
import { PickUserType, UserType } from './usersDummyData';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
export const posts: UserType[] = [
  {
    title: 'First post',
    body: 'Hello, this is my post.',
    image: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
    creator: {
      id: 1,
      userRank: 'Member',
      fullName: 'Aya Ali',
      avatar: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    },
  },
  {
    title: 'First post',
    body: 'Hello, this is my post.',
    image: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
    creator: {
      id: 2,
      userRank: 'Member',
      fullName: 'Aya Ali',
      avatar: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    },
  },
];

export default function Index() {
  const user: PickUserType = {
    id: 1,
    avatar: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
  };

  return (
    <div>
      <CreatPost user={user} />
      <Posts posts={posts} />
    </div>
  );
}
