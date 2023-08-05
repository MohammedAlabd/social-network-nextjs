import PostBody from '@/components/PostBody.tsx';
import PostNav from '@/components/PostNav.tsx';
import PublisherInfo from '@/components/PublisherInfo.tsx';
import DemoData from '../../../data/PostData.json';

function post() {
  return (
    <div className="bg-base-100">
      <PostNav section={DemoData.post.SectionInfo} />
      <div className="m-72 mt-14">
        <PublisherInfo userData={DemoData.post.user} section={DemoData.post.SectionInfo} />
        <PostBody content={DemoData.post.content} />
      </div>
    </div>
  );
}

export default post;
