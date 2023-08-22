import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import DOMPurify from 'dompurify';
import { Image } from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import MenuBar from './MenuBar';
import { Props } from './RichTextEditor.types.ts';

const RichTextEditor: React.FC<Props> = function ({ onSubmit, placeholder = 'Type anything', initialContent = '' }) {
  const [content, setContent] = useState('');
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TaskList,
      TaskItem,
      Highlight,
      Placeholder.configure({
        placeholder,
      }),
      Image,
    ],
    onUpdate: ({ editor }) => setContent(DOMPurify.sanitize(editor.getHTML())),
  });
  return (
    <div>
      <div className="editor m-2">
        {editor && <MenuBar editor={editor} />}
        {editor && <EditorContent className="editor__content" data-testid="editor-content" editor={editor} />}
      </div>
      <button type="button" onClick={() => onSubmit(content)} className=" btn ml-2 w-1/6">
        Submit
      </button>
    </div>
  );
};
export default RichTextEditor;
