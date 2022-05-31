import React, { useState } from "react";
import AddInput from "./AddInput";
import Header from "./Header";
import NoteList from "./NoteList";

const Home = () => {
  const characterLimit = 100;

  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [doneNote, setDoneNote] = useState([]);

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setInput(e.target.value);
    }
  };

  const handleAdd = () => {
    const newNote = {
      text: input,
    };

    const newNotes = [...notes, newNote];
    if (input !== "") setNotes(newNotes);

    setInput("");
  };

  const handleDelete = (id) => {
    const deleleNote = notes.filter((note, index) => index !== id);
    setNotes(deleleNote);
  };

  const handleDone = (id) => {
    console.log("Id:", id);
  };

  return (
    <div>
      <Header doneNote={doneNote} setDoneNote={setDoneNote} />
      <AddInput
        handleAdd={handleAdd}
        input={input}
        handleChange={handleChange}
        characterLimit={characterLimit}
      />
      <NoteList
        notes={notes}
        handleDelete={handleDelete}
        handleDone={handleDone}
        doneNote={doneNote}
        setDoneNote={setDoneNote}
      />
    </div>
  );
};

export default Home;
