import sanitizeHTMLContent from './SanitizeHTMLContent.ts';

function PostBody({ content }: { content: string }) {
  if (!content) {
    return null;
  }
  const sanitizedHtml = sanitizeHTMLContent({ content });
  return <div className="ml-3 mr-3 mt-10">{sanitizedHtml}</div>;
}
export default PostBody;
