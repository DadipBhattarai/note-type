import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

const Context = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [doneNote, setDoneNote] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <NoteContext.Provider
      value={{
        show,
        setShow,
        notes,
        setNotes,
        input,
        setInput,
        doneNote,
        setDoneNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default Context;

export const NoteContextState = () => {
  return useContext(NoteContext);
};
