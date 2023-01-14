import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function TextEditor({editorState,onEditorStateChange}) {
    
        
        
        return (
            <div>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    toolbar={{
                        image: {uploadEnabled:true,uploadCallback: true,},
                    }}
                    onEditorStateChange={onEditorStateChange}
                />
                
                
        </div>
        )
}
    
export default TextEditor

