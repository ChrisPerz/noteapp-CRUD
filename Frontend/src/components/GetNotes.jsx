import React, { useEffect, useState } from 'react';

const NoteCard = ({ note }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px', overflowY: 'auto' }}>
      <h3>{note.title}</h3>
      <p>{note.message}</p>
      <p style={{ fontSize: '13px' }}><strong>Tag: </strong>{note.category}</p>
      <p style={{ fontSize: '13px' }}><strong>note_id:</strong> {note.id}</p>
      <p style={{ fontSize: '13px' }}><strong>is_archived:</strong> {note.is_archived ? 'True' : 'False'}</p>
    </div>
  );
};

const GetNotes = ({ isNotesUpdated }) => {
  const [notes, setNotes] = useState([]);
  const[valSelector,setValSelector]=useState("")
  let url=""
  const fetchNotes = async (selector) => {
    setValSelector(selector)
    if (selector=="all"){
      url=`http://localhost:8000/notes/getnotes`
    }
    else if (selector=="archived"){
      url=`http://localhost:8000/notes/archivednotes`
    }
    else if (selector=="active"){
      url=`http://localhost:8000/notes/activenotes`
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.sort((a, b) => a.id - b.id);
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes(valSelector);
  }, [isNotesUpdated]);

  return (
    <>
      <div style={{background:"gray",padding:"10px", borderRadius:"50px"}}>
        <h3>Select the notes:</h3>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <button type="button" onClick={() => fetchNotes("all")}>
            Show all notes
          </button>
          <button type="button" onClick={() => fetchNotes("archived")}>
            Show Archived notes
          </button>
          <button type="button" onClick={() => fetchNotes("active")}>
            Show Active notes
          </button>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </>
  );
};

export default GetNotes;
