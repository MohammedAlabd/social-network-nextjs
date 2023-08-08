import Comments from '../components/Comments.tsx';

export default function Home() {
  return (
    <main>
      <h1 className="test-hello">hello Team</h1>
      <Comments currentUserId="1" />
    </main>
  );
}
