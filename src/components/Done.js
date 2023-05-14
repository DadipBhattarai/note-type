import React from "react";
import { NoteContextState } from "../Context";

const Done = ({ done }) => {
  const { doneNote, setDoneNote } = NoteContextState();

  return (
    <div className="note-done">
      <p>{done} Hello world</p>
      <div className="actions">
        <button
          onClick={() => setDoneNote(doneNote.filter((text) => text !== done))}
          style={{ marginRight: "10px", padding: "5px 8px" }}
        >
          UnDone
        </button>
      </div>
    </div>
  );
};

export default Done;
