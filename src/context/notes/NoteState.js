import { useState } from "react";
import noteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

   // GET ALL NOTE
  const getallnotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2NGRhNDZlMWRlMTdmODc4YjcyYTBiIn0sImlhdCI6MTc1MTQ0MDM2MH0.NtOuj5_K6nXRPv4zkMAFS6BimjRnzqpb4uB4qnVa77U",
      },
    });

    const json = await response.json();
    setnotes(json)

  };


  // ADD A NOTE
  const addnote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2NGRhNDZlMWRlMTdmODc4YjcyYTBiIn0sImlhdCI6MTc1MTQ0MDM2MH0.NtOuj5_K6nXRPv4zkMAFS6BimjRnzqpb4uB4qnVa77U"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();
    console.log(json);
    console.log("adding a note");

    const note = {
      _id: "682973647880b741345335d54hhagaaac",
      user: "682494b39c91e8f3e69aeca2",
      title: title,
      description: description,
      tag: tag,
      date: "2025-05-18T05:43:00.967Z",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };
  //DELETE A NOTE
  const deletenote =async (id) => {
     // API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2NGRhNDZlMWRlMTdmODc4YjcyYTBiIn0sImlhdCI6MTc1MTQ0MDM2MH0.NtOuj5_K6nXRPv4zkMAFS6BimjRnzqpb4uB4qnVa77U",
      },
    });

    const json = response.json();
    console.log(json);
    console.log("deleting a note with id " + id);
    const newNotes = notes.filter((note) => note._id !== id);
    setnotes(newNotes);
  };

  // EDIT A NOTE
  const editnote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2NGRhNDZlMWRlMTdmODc4YjcyYTBiIn0sImlhdCI6MTc1MTQ0MDM2MH0.NtOuj5_K6nXRPv4zkMAFS6BimjRnzqpb4uB4qnVa77U",
      },
      body: JSON.stringify({ title, description, tag }),
    });

const json = await response.json(); // ✅ Await it
    console.log(json);

    // Update note in local state
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
         break;
   }

  };

  const [notes, setnotes] = useState(notesInitial);
  return (
    <noteContext.Provider value={{ notes, addnote, deletenote, editnote , getallnotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
