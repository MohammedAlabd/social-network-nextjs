export interface Post {
  id: number;
  username: string;
  userRank: string;
  userPhoto: string;
  postText: string;
  postPhoto: string;
}

export interface UserType {
  id: number;
  userPhoto: string;
}

export const posts: Post[] = [
  {
    id: 1,
    username: 'Aya Ali',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    postText: 'Hello, this is my post.',
    postPhoto: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 2,
    username: 'Motaz',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    postText: 'Just sharing something interesting!',
    postPhoto: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 3,
    username: 'Mohammed',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    postText: 'Just sharing something interesting!',
    postPhoto: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 4,
    username: 'Sarah',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    postText: 'Just sharing something interesting!',
    postPhoto: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 5,
    username: 'Mays',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/eb/64/5c/eb645c1b5cbfe001bc0fa435fabcc8dc.jpg',
    postText: 'Just sharing something interesting!',
    postPhoto: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
];
