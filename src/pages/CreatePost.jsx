import React from 'react'
import TextEditor from './TextEditor'
import {EditorState,convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import SanitiseHTML from './SanitiseHTML';


function CreatePost() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const onEditorStateChange=(editorState)=>  {
    setEditorState(editorState);
    //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }
  const submit=(e)=>{
    e.preventDefault();
    
    setEditorState(EditorState.createEmpty());
  }
  return (
    <div className='post'>

        <h1 className='post_heading'> Write your Memories of the Day</h1>
        <form action="" onSubmit={submit}>
              <input type="text" placeholder='title of daily summary'></input>
              <div className='text_editor' >
                <TextEditor editorState={editorState} onEditorStateChange={onEditorStateChange} />
              </div>
              <input type="date" placeholder='date of daily summary'></input>
              <input type="text" placeholder='tag'></input>
              <button className="form-submit-button">submit</button>
        </form>
        
              
        
        

        {/*<div className='sanitise_HTML'>
            <SanitiseHTML myHTML={draftToHtml(convertToRaw(editorState.getCurrentContent()))}/>
  </div>*/}
        
       
        
    </div>
  )
}

export default CreatePost