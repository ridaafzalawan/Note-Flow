import React, { useState, useEffect, useCallback } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  const getToken = () => localStorage.getItem("token");

  const getAllNotes = useCallback(async () => {
    const token = getToken();
    if (!token) return;

    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const json = await response.json();

      if (!Array.isArray(json)) {
        console.error("❌ Backend error or invalid data format:", json);
        return;
      }

      setNotes(json);
    } catch (error) {
      console.error("❌ Failed to fetch notes:", error.message);
    }
  }, []);

  const addNote = async (title, description, tag) => {
    const token = getToken();
    if (!token) return;

    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      setNotes((prevNotes) => [...prevNotes, json]);
    } catch (error) {
      console.error("❌ Failed to add note:", error.message);
    }
  };

  const deleteNote = async (id) => {
    const token = getToken();
    if (!token) return;

    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("❌ Failed to delete note:", error.message);
    }
  };

  const editNote = async (id, title, description, tag) => {
    const token = getToken();
    if (!token) return;

    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );

      setNotes(updatedNotes);
    } catch (error) {
      console.error("❌ Failed to edit note:", error.message);
    }
  };

  useEffect(() => {
    if (getToken()) {
      getAllNotes();
    }
  }, [getAllNotes]);

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
