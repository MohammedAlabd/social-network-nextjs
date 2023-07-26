import React, { useEffect} from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import MenuBar from './richTextEditor/MenuBar';

import DOMPurify from 'dompurify';

type Props = {
  handleSubmit: (content: string) => void 
  };
const RichTextEditor: React.FC<Props> = ({handleSubmit}) => {

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
    content: ``,
    // triggered on every change
 onUpdate: ({ editor }) => {
  const htmlContent = editor.getHTML()
  const sanitizedContent = DOMPurify.sanitize(htmlContent);
  handleSubmit(sanitizedContent)
  console.log(sanitizedContent)
}});

  return (
    <div className="editor" >
      {editor && <MenuBar editor={editor} />}
      {editor && <EditorContent className="editor__content" editor={editor} />}
    </div>
  )
};

export default RichTextEditor;
