import Document from '@tiptap/extension-document';
import Mention from '@tiptap/extension-mention';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/react';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import suggestion from './SuggestionList.tsx';
import { Props } from './MiniamlTextEditor.Types.ts';

const MinimalTextEditor: React.FC<Props> = function ({ onSubmit, placeholder = 'comment', initialContent = '' }) {
  const [content, setContent] = useState('');
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder,
      }),
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion,
      }),
    ],
    onUpdate: ({ editor }) => setContent(DOMPurify.sanitize(editor.getHTML())),
  });
  return (
    <div>
      <EditorContent editor={editor} />
      <button type="button" onClick={() => onSubmit(content)} className=" btn ml-2 w-1/6">
        Submit
      </button>
    </div>
  );
};

export default MinimalTextEditor;
