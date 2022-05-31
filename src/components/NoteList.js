import React from "react";
import { NoteContextState } from "../Context";
import Note from "./Note";

const NoteList = () => {
  const { notes } = NoteContextState();

  return (
    <div className="noteList">
      {notes.map((note, index) => (
        <Note key={index} index={index} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
