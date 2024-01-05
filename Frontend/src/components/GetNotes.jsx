
import React, { useEffect, useState } from 'react';

const NoteCard = ({ note }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{note.title}</h3>
      <p>{note.message}</p>
      <p>{note.category}</p>
    </div>
  );
};

const GetNotes = ({isNotesUpdated}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
   
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:8000/notes/getnotes');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, [isNotesUpdated]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default GetNotes;
