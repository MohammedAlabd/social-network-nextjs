import { useState } from 'react';

// eslint-disable-next-line import/extensions
import RichTextEditor from '../components/RichTextEditor';

export default function Home() {
  const [editorContent, setEditorContent] = useState('');

  const handleSubmit = (htmlContent: string) => {
    setEditorContent(htmlContent);
    // console.log('Content submitted:', htmlContent);
  };

  return <RichTextEditor handleSubmit={handleSubmit} />;
}
