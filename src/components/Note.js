import React, { useState } from "react";

const Note = ({ text, index, handleDelete, doneNote, setDoneNote }) => {
  return (
    <>
      <div className="note">
        <p>{text}</p>
        <div className="actions">
          {doneNote.includes(text) ? (
            <button
              onClick={() =>
                setDoneNote(doneNote.filter((done) => done !== text))
              }
              style={{ marginRight: "10px", padding: "5px 8px" }}
            >
              Undone
            </button>
          ) : (
            <button
              onClick={() => setDoneNote([...doneNote, text])}
              style={{ marginRight: "10px", padding: "5px 8px" }}
            >
              Done
            </button>
          )}
          <button
            style={{ padding: "5px 8px" }}
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
