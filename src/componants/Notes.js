import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

function Notes() {

  const context = useContext(noteContext);
  const { notes, addnote } = context;   // eslint-disable-next-line 

  return (
    <>
      <AddNote/>
      <div className="row my-3 ">
      <h1>Your Notes</h1>
      {notes.map((note) => ( // Use singular 'note' for the loop parameter
        <NoteItem key={note._id} note={note} /> // Use 'note' here
      ))}
    </div>
    </>
  );
}

export default Notes;
