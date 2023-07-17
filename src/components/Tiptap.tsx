import React, { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import MenuBar from './tiptap/MenuBar';

const TipTap: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
       
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TaskList,
      TaskItem,
      Highlight,
    ],
    content: `
      <p>This isn’t bold.</p>
      <p><strong>This is bold.</strong></p>
      <p><b>And this.</b></p>
      <p style="font-weight: bold">This as well.</p>
      <p style="font-weight: bolder">Oh, and this!</p>
      <p style="font-weight: 500">Cool, isn’t it!?</p>
      <p style="font-weight: 999">Up to font weight 999!!!</p>
    `,
  });

  useEffect(() => {
    if (editor) {
    }
  }, [editor]);

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      {editor && <EditorContent className="editor__content" editor={editor} />}
    </div>
  )
};

export default TipTap;
