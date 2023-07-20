
import React, { Fragment } from 'react'
import MenuItem from './MenuItem'

import Bold from '../../../public/assests/icons/bold.svg'
import Italic from '../../../public/assests/icons/italic.svg'
import Strike from '../../../public/assests/icons/strike.svg'
import Code from '../../../public/assests/icons/code.svg'
import Highlight from '../../../public/assests/icons/highlight.svg'
import Heading1 from '../../../public/assests/icons/heading1.svg'
import Heading2 from '../../../public/assests/icons/heading2.svg'
import Left from '../../../public/assests/icons/left.svg'
import Center from '../../../public/assests/icons/center.svg'
import Right from '../../../public/assests/icons/right.svg'
import Paragraph from '../../../public/assests/icons/paragraph.svg'
import BulletList from '../../../public/assests/icons/bulletList.svg'
import OrderedList from '../../../public/assests/icons/orderedList.svg'
import TaskList from '../../../public/assests/icons/taskList.svg'
import CodeBlock from '../../../public/assests/icons/codeBlock.svg'
import Blockquote from '../../../public/assests/icons/blockquote.svg'
import HorizontalRule from '../../../public/assests/icons/horizontalRule.svg'
import HardBreak from '../../../public/assests/icons/hardBreak.svg'
import ClearFormat from '../../../public/assests/icons/clearFormat.svg'
import Undo from '../../../public/assests/icons/undo.svg'
import Redo from '../../../public/assests/icons/redo.svg'


type EditorProps = {
  editor: any; 
};
type MenuItemProps =  {
  icon: string;
  title: string;
  action: () => void;
  isActive?: (() => boolean) 
};

type Item  = MenuItemProps & {
  type?: string | undefined;
};
const MenuBar: React.FC<EditorProps> = ({ editor }) => {

  const items: Item[]=[
    {
      icon: Bold,
      title: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      icon: Italic,
      title: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      icon: Strike,
      title: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
    },
    {
      icon: Code,
      title: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
    },
    {
      icon: Highlight,
      title: 'Highlight',
      action: () => editor.chain().focus().toggleHighlight().run(),
      isActive: () => editor.isActive('highlight'),
    },
   
    {
      icon: Heading1,
      title: 'Heading 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: Heading2,
      title: 'Heading 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: Left,
      title: 'Left',
      action: () => editor.chain().focus().setTextAlign('left').run(),
      isActive: () => editor.isActive({ textAlign: 'left' }),
    },
    {
      icon: Center,
      title: 'Center',
      action: () => editor.chain().focus().setTextAlign('center').run(),
      isActive: () => editor.isActive({ textAlign: 'center' }),
    },
    {
      icon: Right,
      title: 'Right',
      action: () => editor.chain().focus().setTextAlign('right').run(),
      isActive: () => editor.isActive({ textAlign: 'right' }),
    },
    
    {
      icon: Paragraph,
      title: 'Paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      icon: BulletList,
      title: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      icon: OrderedList,
      title: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
    {
      icon: TaskList,
      title: 'Task List',
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive('taskList'),
    },
    {
      icon: CodeBlock,
      title: 'Code Block',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive('codeBlock'),
    },
   
    {
      icon: Blockquote,
      title: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    {
      icon: HorizontalRule,
      title: 'Horizontal Rule',
      action: () => editor.chain().focus().setHorizontalRule().run(),
     
     
    },
   
    {
      icon: HardBreak,
      title: 'Hard Break',
      action: () => editor.chain().focus().setHardBreak().run(),
     
    },
    {
      icon: ClearFormat,
      title: 'Clear Format',
      action: () => editor.chain().focus().clearNodes().unsetAllMarks()
        .run(),
        
    },
  
    {
      icon: Undo,
      title: 'Undo',
      action: ()  => editor.chain().focus().undo().run(),
      
    },
    {
      icon: Redo,
      title: 'Redo',
      action: () => editor.chain().focus().redo().run(),
      
    },
  ]
  
  return (
    <div className="editor__header">
      {items.map((item, index) => (
          <MenuItem key={index} {...item as MenuItemProps} isActive={item.isActive } />
      ))}
    </div>
  )
}

export default MenuBar;