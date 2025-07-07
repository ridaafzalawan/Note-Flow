import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

 const getallnotes = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.warn("🚫 No auth token found. User not logged in.");
    return; // Exit early if no token
  }

  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  });

  const json = await response.json();

  if (response.status === 401 || !json.success) {
    console.error("❌ Failed to fetch notes: Invalid token");
    return;
  }

  setnotes(json.notes);
};

  // ✅ ADD A NOTE
  const addnote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    if (json.success) {
      setnotes(notes.concat(json.savedNote));
    } else {
      console.error("❌ Failed to add note:", json.error || json.errors);
    }
  };

  // ✅ DELETE A NOTE
  const deletenote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const newNotes = notes.filter((note) => note._id !== id);
    setnotes(newNotes);
  };

  // ✅ EDIT A NOTE
  const editnote = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const updatedNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    );
    setnotes(updatedNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addnote, deletenote, editnote, getallnotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
