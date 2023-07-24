/* eslint-disable import/extensions */
import PostBody from '@/components/PostBody';
import PostNav from '@/components/PostNav';
import PublisherInfo from '@/components/PublisherInfo';
import DemoData from '../../../data/PostData.json';

// eslint-disable-next-line arrow-body-style
const post = () => {
  return (
    <div className="bg-base-100">
      <PostNav section={DemoData.post.SectionInfo} /> {/* id={DemoData.post.id} */}
      <div className="m-72 mt-14">
        <PublisherInfo userData={DemoData.post.user} section={DemoData.post.SectionInfo} />
        <PostBody content={DemoData.post.content} />
      </div>
    </div>
  );
};

export default post;
