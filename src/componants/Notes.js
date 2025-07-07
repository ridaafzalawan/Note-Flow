import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;

  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getAllNotes();
    }
  }, [getAllNotes]);

  const updateNote = (currentNote) => {
    ref.current.click(); // Open modal
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click(); // Close modal
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      {/* Hidden button to open modal */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch modal
      </button>

      {/* Edit Note Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-success fw-bold" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label text-success fw-bold">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label text-success fw-bold">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label text-success fw-bold">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Display */}
      <div className="row my-3 p-4 text-white rounded-3">
        <h1 className="text-success mb-4">Your Notes</h1>

        {Array.isArray(notes) && notes.length === 0 && (
          <p className="text-muted">No notes to display</p>
        )}

        {Array.isArray(notes) &&
          notes.map((note) => (
            <NoteItem key={note._id} note={note} updatenote={updateNote} />
          ))}
      </div>
    </>
  );
}

export default Notes;
