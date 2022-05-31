import React from "react";
import Note from "./Note";

const NoteList = ({
  notes,
  handleDelete,
  handleDone,
  doneNote,
  setDoneNote,
}) => {
  const notesLength = notes.length;
  return (
    <div className="noteList">
      {notes.map((note, index) => (
        <Note
          key={index}
          index={index}
          handleDone={handleDone}
          {...note}
          handleDelete={handleDelete}
          doneNote={doneNote}
          setDoneNote={setDoneNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
