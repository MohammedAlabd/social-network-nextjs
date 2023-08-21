import Comments from '../components/Comments/Comments.tsx';

export default function Home() {
  return (
    <main>
      <h1 className="test-hello">hello Team</h1>
      <Comments
        comments={[
          {
            id: '1',
            body: 'First comment',
            creator: {
              id: '1',
              image:
                'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
              username: 'Jack jonson',
            },
            createdAt: '2023-07-16T23:00:33.010+02:00',
            entityId: 'test',
            entityType: 'testType',
            replies: [
              {
                id: '1',
                body: 'First comment',
                creator: {
                  id: '1',
                  image:
                    'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
                  username: 'Jack jonson',
                },
                createdAt: '2023-07-16T23:00:33.010+02:00',
              },
            ],
          },
        ]}
        onAddComment={() => {}}
        onDeleteComment={() => {}}
        onReply={() => {}}
        onUpdateComment={() => {}}
      />
    </main>
  );
}
