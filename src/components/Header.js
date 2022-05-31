import React, { useState } from "react";
import DoneList from "./DoneList";

const Header = ({ doneNote, setDoneNote }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((previousState) => !previousState);
  };

  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <div className="done">
          <button className="done-buton" onClick={handleShow}>
            Done
          </button>
          {show && (
            <DoneList
              doneNote={doneNote}
              setDoneNote={setDoneNote}
              show={show}
              setShow={setShow}
            />
          )}

          <sup className={doneNote.length >= 1 ? "batch-full" : "batch"}>
            {doneNote.length}
          </sup>
        </div>
      </div>
    </>
  );
};

export default Header;
