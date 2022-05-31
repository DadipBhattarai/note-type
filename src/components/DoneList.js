import React, { createRef, useEffect, useRef } from "react";
import Done from "./Done";

const DoneList = ({ show, setShow, doneNote, setDoneNote }) => {
  const listRef = useRef();
  useEffect(() => {
    const clickedOption = (e) => {
      if (show && listRef.current && !listRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", clickedOption);

    return () => {
      document.removeEventListener("mousedown", clickedOption);
    };
  }, [show]);

  return (
    <div ref={listRef} className="done-list">
      {doneNote.map((done, index) => (
        <Done
          key={index}
          done={done}
          doneNote={doneNote}
          setDoneNote={setDoneNote}
        />
      ))}
    </div>
  );
};

export default DoneList;
