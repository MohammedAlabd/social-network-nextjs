import DOMPurify from 'isomorphic-dompurify';
import ReactHtmlParser from 'react-html-parser';

export default function sanitizeHTMLContent({ content }: { content: string }) {
  if (content === null) {
    throw new Error('Content cannot be null');
  }
  if (typeof content === 'undefined') {
    throw new Error('Content cannot be undefined');
  }
  const clean = DOMPurify.sanitize(content);
  if (!clean) {
    return null;
  }
  const sanitizeHTML = ReactHtmlParser(clean);
  return sanitizeHTML;
}
