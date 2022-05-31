import React from "react";
import { NoteContextState } from "../Context";

const AddInput = () => {
  const { input, setInput, notes, setNotes } = NoteContextState();
  const characterLimit = 100;

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

  return (
    <>
      <div className="input-field">
        <div style={{ flex: 1 }}>
          <input
            onChange={handleChange}
            value={input}
            type="text"
            placeholder="Enter Note"
          />
        </div>
        <button className="add" onClick={handleAdd}>
          Add
        </button>
      </div>
      <h4 style={{ textAlign: "right" }}>
        {characterLimit - input.length} character remaining
      </h4>
    </>
  );
};

export default AddInput;
