import React, { useState } from "react";
import { NoteContextState } from "../Context";
import DoneList from "./DoneList";

const Header = () => {
  const { show, setShow, doneNote } = NoteContextState();

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <div className="done">
          <button className="done-buton" onClick={handleShow}>
            Done
          </button>
          {show && <DoneList />}

          <sup className={doneNote.length >= 1 ? "batch-full" : "batch"}>
            {doneNote.length}
          </sup>
        </div>
      </div>
    </>
  );
};

export default Header;
