import { useState } from "react";
import noteContext from "./NoteContext";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "68271275d77759d08fc93839751",
      user: "682494b39c91e8f3e69aeca2",
      title: "my title",
      description: "its a yy",
      tag: "personal",
      date: "2025-05-16T10:24:53.308Z",
      __v: 0,
    },
    {
      _id: "682973647880b74d50909094fb6aac",
      user: "682494b39c91e8f3e69aeca2",
      title: "my updated title",
      description: "its a description",
      tag: "personal",
      date: "2025-05-18T05:43:00.967Z",
      __v: 0,
    },
    {
      _id: "68271275d59d08fc9385465443539751",
      user: "682494b39c91e8f3e69aeca2",
      title: "my title",
      description: "its a yy",
      tag: "personal",
      date: "2025-05-16T10:24:53.308Z",
      __v: 0,
    },
    {
      _id: "682973647880b741345335d54fb6aac",
      user: "682494b39c91e8f3e69aeca2",
      title: "my updated title",
      description: "its a description",
      tag: "personal",
      date: "2025-05-18T05:43:00.967Z",
      __v: 0,
    },
    {
      _id: "68271275d592233d08fc93839751",
      user: "682494b39c91e8f3e69aeca2",
      title: "my title",
      description: "its a yy",
      tag: "personal",
      date: "2025-05-16T10:24:53.308Z",
      __v: 0,
    },
    {
      _id: "682973647222344880b74d54fb6aac",
      user: "682494b39c91e8f3e69aeca2",
      title: "my updated title",
      description: "its a description",
      tag: "personal",
      date: "2025-05-18T05:43:00.967Z",
      __v: 0,
    },
  ];
  // ADD A NOTE
  const addnote = (title,description,tag)=>{
    const note = {
      _id: "682973647880b741345335d54fb6aac",
      user: "682494b39c91e8f3e69aeca2",
      title: "my added title",
      description: "its a added notes description",
      tag: "personal",
      date: "2025-05-18T05:43:00.967Z",
      __v: 0,
    };
    setnotes(notes.push(note))
  }
  //DELETE A NOTE
  const deletenote = ()=>{}
  //EDIT A NOTE
  const editnote = ()=>{}

  const [notes, setnotes] = useState(notesInitial);
  return (
    <noteContext.Provider value={{ notes, addnote , deletenote , editnote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
