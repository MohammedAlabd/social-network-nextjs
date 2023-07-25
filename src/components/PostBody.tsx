import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import DOMPurify from 'isomorphic-dompurify';

function PostBody({ content }: { content: string }) {
  const clean = DOMPurify.sanitize(content, {
    // ALLOWED_TAGS: ['p', 'h1'],
    // ALLOWED_ATTR: ['className', 'dir'],
    // SAFE_FOR_TEMPLATES: true,
    // USE_PROFILES: { html: true },
  });
  return (
    <div className="ml-3 mr-3 mt-10">
      <div dangerouslySetInnerHTML={{ __html: clean }} />
    </div>
  );
}

export default PostBody;
