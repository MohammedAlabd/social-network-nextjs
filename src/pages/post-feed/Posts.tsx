import PostListItem from './postListItem';
import { User, posts } from './usersDummyData';

export default function Posts() {
  return (
    <div>
      <div className="space-y-4">
        {posts.map((user: User) => (
          <PostListItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
