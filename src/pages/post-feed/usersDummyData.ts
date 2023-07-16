export interface User {
  id: number;
  username: string;
  userRank: string;
  userPhoto: string;
  text: string;
  photo: string;
}

export const users: User[] = [
  {
    id: 1,
    username: 'Aya Ali',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    text: 'Hello, this is my post.',
    photo: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 2,
    username: 'Motaz',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    text: 'Just sharing something interesting!',
    photo: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 3,
    username: 'Mohammed',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    text: 'Just sharing something interesting!',
    photo: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 4,
    username: 'Sarah',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    text: 'Just sharing something interesting!',
    photo: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
  {
    id: 5,
    username: 'Mays',
    userRank: 'Member',
    userPhoto: 'https://i.pinimg.com/236x/eb/64/5c/eb645c1b5cbfe001bc0fa435fabcc8dc.jpg',
    text: 'Just sharing something interesting!',
    photo: 'https://i.pinimg.com/236x/9b/db/0e/9bdb0e7f7aabed74519a35a661d6b213.jpg',
  },
];
