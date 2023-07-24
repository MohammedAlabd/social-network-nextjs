import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { sanitize } from 'dompurify';

function PostBody({ content }: { content: string }) {
  const postContent = <div dangerouslySetInnerHTML={{ __html: content }} />;
  //   const clean = sanitize(content, {
  //     ALLOWED_TAGS: ['p', 'img', 'h1'],
  //     ALLOWED_ATTR: ['className', 'dir'],
  //     SAFE_FOR_TEMPLATES: true,
  //     USE_PROFILES: { html: true },
  //   });
  return <div className="ml-3 mr-3 mt-10">{postContent}</div>;
}

export default PostBody;
