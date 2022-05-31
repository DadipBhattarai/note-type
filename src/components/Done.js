import React from "react";

const Done = ({ done, doneNote, setDoneNote }) => {
  return (
    <div className="note-done">
      <p>{done}</p>
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
