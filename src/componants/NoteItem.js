import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";


function NoteItem(props) {
  const { note ,  updatenote } = props;
    const context = useContext(noteContext);
  const { deletenote } = context;
  return (
    <div className="col-md-3">
  <div className="card bg-black text-light my-3 shadow-sm border-success">
    <div className="card-body">
      <h5 className="card-title text-success">{note.title}</h5>
      <p className="card-text text-white">{note.description}</p>
      <p className="card-text text-success">{note.tag}</p>

      {/* Edit icon - green */}
      <i
        className="fa-solid fa-pen-to-square mx-2 text-warning"
        role="button"
        title="Edit Note"
        onClick={() => { updatenote(note); }}
      ></i>

      {/* Delete icon - red */}
      <i
        className="fa-solid fa-trash mx-2 text-danger"
        role="button"
        title="Delete Note"
        onClick={() => { deletenote(note._id); }}
      ></i>
    </div>
  </div>
</div>

  );
}

export default NoteItem;
