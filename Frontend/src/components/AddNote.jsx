import React, { useState } from 'react';

const AddNote= ({isNotesUpdated}) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');
  
    const handleAddNote = async () => {
      const queryParams = new URLSearchParams({
        title: title,
        message: message,
        category: category
      });
    
      try {
        const response = await fetch(`http://localhost:8000/notes/createnote?${queryParams}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });
    
        if (response.ok) {
          console.log('Note created successfully');
            isNotesUpdated(true)
        } else {
          console.error('Failed to create note');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  
    return (
      <div>
        <h2>Add Note</h2>
        <form>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <br />
          <label>Content:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          <br />
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          <br />
          <button type="button" onClick={handleAddNote}>
            Add Note
          </button>
        </form>
      </div>
    );
  };

  export default AddNote