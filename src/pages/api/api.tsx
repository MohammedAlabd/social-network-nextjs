export const getComments = async () => [
  {
    id: '1',
    body: 'First comment',
    image:
      'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
    username: 'Jack jonson',
    userId: '1',
    parentId: null,
    createdAt: '2023-07-16T23:00:33.010+02:00',
  },
  {
    id: '2',
    body: 'Second comment',
    image:
      'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
    username: 'John',
    userId: '2',
    parentId: null,
    createdAt: '2023-07-16T23:00:33.010+02:00',
  },
  {
    id: '3',
    body: 'First comment first child',
    image:
      'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
    username: 'John',
    userId: '2',
    parentId: '1',
    createdAt: '2023-07-16T23:00:33.010+02:00',
  },
  {
    id: '4',
    body: 'Second comment second child',
    image:
      'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
    username: 'John',
    userId: '2',
    parentId: '2',
    createdAt: '2023-07-16T23:00:33.010+02:00',
  },
];
export const createComment = async function (text: string, parentId = null) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: '1',
    username: 'John',
    image:
      'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
    createdAt: new Date().toISOString(),
  };
};
export const updateComment = async function (text: string) {
  return { text };
};
export const deleteComment = async function () {
  return {};
};
