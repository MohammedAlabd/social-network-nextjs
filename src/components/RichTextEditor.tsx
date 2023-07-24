import React, { useEffect} from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import MenuBar from './richTextEditor/MenuBar';

const RichTextEditor: React.FC = () => {

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
    content: `Start writing`,
    // triggered on every change
 onUpdate: ({ editor }) => {
  const json = editor.getJSON()
  // send the content to an API here
}});

  return (
    <div className="editor" >
      {editor && <MenuBar editor={editor} />}
      {editor && <EditorContent className="editor__content" editor={editor} />}
    </div>
  )
};

export default RichTextEditor;
