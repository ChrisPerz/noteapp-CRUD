import './App.css'
import AddNote from './components/AddNote'
import GetNotes from './components/GetNotes'
import { useState, useEffect } from 'react';

function App() {
 
  const [notesUpdated, setNotesUpdated] = useState(false);

  useEffect(() => {
    if (notesUpdated) {
      setNotesUpdated(false);
    }
  }, [notesUpdated]);
  return (
    <>
     <AddNote isNotesUpdated={setNotesUpdated}/>
     <GetNotes isNotesUpdated={notesUpdated}/>
    </>
  )
}

export default App
