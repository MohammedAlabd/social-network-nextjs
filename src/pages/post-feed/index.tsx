import Image from 'next/image';
import CreatPost from './CreatPost';
import Post from './Post';

export default function Index() {
  return (
    <div>
      <CreatPost />
      <Post />
    </div>
  );
}
