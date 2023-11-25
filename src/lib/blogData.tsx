import getFormattedDate from '@/lib/getFormattedDate';

export const blogsData = [
  {
    title: 'How to become a better programmer',
    body: 'You can find many ways to be a better programmer and here are some of them',
    author: 'Moe',
    id: 1,
    date: getFormattedDate(new Date()),
  },
  {
    title: 'Most popular books about coding',
    body: 'Learn how to code by practice',
    author: 'Ahmed',
    id: 2,
    date: getFormattedDate(new Date()),
  },
  {
    title: 'How to write clean code',
    body: 'Clean code needs a lot of time and effort',
    author: 'Ali',
    id: 3,
    date: getFormattedDate(new Date()),
  },
];

export default blogsData;
