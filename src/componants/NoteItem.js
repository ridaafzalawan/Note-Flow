import React from "react";

function NoteItem(props) {
  const { note } = props;

  return (
    <div className="col-md-3 ">
      <div className="card  bg-dark text-light my-3">
        <div className="card-body text-light">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-pen-to-square mx-3 text-light"></i>
          <i className="fa-solid fa-trash text-light"></i>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
