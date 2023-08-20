import PostListItem from './postListItem';
import { Post, posts } from './usersDummyData';

export default function Posts() {
  return (
    <div>
      <div className="space-y-4">
        {posts.map((post: Post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
