import React, { useState } from 'react';

const AddNote= ({isNotesUpdated}) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');
    const [note_id,setId]=useState('');
    const [sendToArchive,SetSendToArchive]=useState(false)
    let url=""
    let methodq=""
    const handleAddNote = async (selector) => {
      const queryParams = new URLSearchParams({
        title: title,
        message: message,
        category: category
      });
      if (selector=="add"){
        url=`http://localhost:8000/notes/createnote?${queryParams}`
        methodq='POST'
      }
      else if(selector=="update"){
        url=`http://localhost:8000/notes/updatenote/${note_id}?${queryParams}&is_archived=${sendToArchive}`
        methodq='PUT'
      }
      else if(selector=="delete"){
        url=`http://localhost:8000/notes/deletenote/${note_id}`
        methodq='DELETE'
      }
      try {
        const response = await fetch(url, {
          method: methodq,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });
    
        if (response.ok) {
          console.log('response successfull');
            isNotesUpdated(true)
        } else {
          console.error('Failed to alterate note');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  
    return (
      <div>
        <h2>Note actions</h2>
        <form>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <label>Content:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <br />
            <label>Category:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <br />
          </div>
          
          
          
          <button type="button" onClick={()=>handleAddNote("add")}>
            Add Note
          </button>
          
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", paddingBottom:"7px"}}>
            
            <label >Note_id(for Update/delete):</label>
            <input type="text" value={note_id} id='4' onChange={(e) => setId(e.target.value)} />
            <br />

            <label >Send to Archive</label>
            <input type="checkbox" onChange={(e) => SetSendToArchive(e.target.checked)}/>

            <button type="button" onClick={()=>handleAddNote("update")}>
                Update Note
            </button>
          </div>
        
          <button type="button" onClick={()=>handleAddNote("delete")}>
            Delete Note
          </button>
        </form>
      </div>
    );
  };

  export default AddNote