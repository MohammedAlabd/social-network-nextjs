import { NextApiRequest, NextApiResponse } from 'next';
import getFormattedDate from '@/lib/getFormattedDate';

// blog post list
const BlogList = (blogPosts: any[]) => `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Blog List</title>
      </head>
      <body>
        <h1>Blog Page!</h1>
        <ul>
          ${blogPosts.map((post) => `<li>${post.title}</li>`).join('')}
        </ul>
      </body>
    </html>
  `;

export default function justForTest(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Virtual Blog post list becouse I don't have the blogs page ready yet
    const blogPosts = [
      { id: 1, title: 'First Blog Post', date: getFormattedDate },
      { id: 2, title: 'Second Blog Post', date: getFormattedDate },
      { id: 3, title: 'Third Blog Post', date: getFormattedDate },
    ];

    // Trying the code
    const result = BlogList(blogPosts);

    // Send a response
    res.status(200).send(result);
  } catch (error) {
    // Handle error
    res.status(500).json({ message: 'Internal Server Error' });
  }
}