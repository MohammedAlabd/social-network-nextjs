import PostListItem from './postListItem';
import { posts } from './index';
import { UserType } from './usersDummyData';

export default function Posts() {
  return (
    <div>
      <div className="space-y-4">
        {posts.map((post: UserType) => (
          <PostListItem key={post.creator.id} post={post} />
        ))}
      </div>
    </div>
  );
}
