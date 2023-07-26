import {  useState } from 'react'

import RichTextEditor from '../components/RichTextEditor'
type Props = {
    handleSubmit: (content: string) => void 
    };
export default function Home<Props>() {
    const [editorContent, setEditorContent ] = useState('');

    const handleSubmit = (htmlContent:string) => {
        setEditorContent(htmlContent);
        //console.log('Content submitted:', htmlContent);
      }
    
    
    return (
         <RichTextEditor handleSubmit={handleSubmit}/>
    )
}

