import React, { useState, useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import { useNavigate } from "react-router-dom";

function AddNote() {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { addNote, getAllNotes } = useContext(noteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleClick = async (e) => {
    e.preventDefault();

    if (!note.title || !note.description) return;

    await addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });

    // optional: refresh notes list to get full data
    await getAllNotes();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 rounded-4 shadow-sm bg-success">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 text-dark fw-bold">
                ✍️ Add a New Note
              </h3>

              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label text-dark fw-bold">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control border-success-subtle"
                    id="title"
                    name="title"
                    value={note.title}
                    onChange={onChange}
                    placeholder="Enter note title"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label text-dark fw-bold">
                    Description
                  </label>
                  <textarea
                    className="form-control border-primary-subtle"
                    id="description"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                    rows="3"
                    placeholder="Enter note description"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label text-dark fw-bold">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control border-info-subtle"
                    id="tag"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                    placeholder="Optional tag"
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg"
                    onClick={handleClick}
                    disabled={note.title.length < 3 || note.description.length < 5}
                  >
                    + Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
