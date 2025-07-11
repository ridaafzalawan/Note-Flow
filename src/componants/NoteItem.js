import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

function NoteItem({ note, updatenote }) {
  const { deleteNote } = useContext(noteContext);

  return (
    <div className="card bg-black text-light my-3 shadow-sm border-success h-100">
      <div className="card-body">
        <h5 className="card-title text-success">{note.title || "No Title"}</h5>
        <p className="card-text text-white">{note.description || "No Description"}</p>
        <p className="card-text text-success">{note.tag || "No Tag"}</p>

        {/* Edit icon */}
        <i
          className="fa-solid fa-pen-to-square mx-2 text-warning"
          role="button"
          title="Edit Note"
          onClick={() => updatenote(note)}
        ></i>

        {/* Delete icon */}
        <i
          className="fa-solid fa-trash mx-2 text-danger"
          role="button"
          title="Delete Note"
          onClick={() => deleteNote(note._id)}
        ></i>
      </div>
    </div>
  );
}

export default NoteItem;