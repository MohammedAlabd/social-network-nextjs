import { useState } from 'react';

// eslint-disable-next-line import/extensions
import MinimalTextEditor from '@/components/minimalTextEditor/MinimalTextEditor';
import RichTextEditor from '../components/RichTextEditor';

export default function Home() {
  return <MinimalTextEditor onSubmit={(content) => console.log(content)} />;
}
