import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

function AddNote() {
  const [note , setnote] =useState({tile:"" , description:"" , tag:""})
  const context = useContext(noteContext);
  const { addnote } = context;
  const handleclick =()=>{
    addnote(note);
  }
  const onchange =(e)=>{
    setnote({...note, [e.target.name] :e.target.value })
  }
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  onChange={onchange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description"  aria-describedby="emailHelp" onChange={onchange}/>
        </div>

    
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
