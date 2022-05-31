import React, { useEffect, useRef } from "react";
import { NoteContextState } from "../Context";
import Done from "./Done";

const DoneList = () => {
  const listRef = useRef();
  const { show, setShow, doneNote } = NoteContextState();

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
    <div
      ref={listRef}
      className={doneNote.length >= 1 ? "done-list" : "done-list2"}
    >
      {doneNote
        ? doneNote.map((done, index) => <Done done={done} key={index} />)
        : ""}
    </div>
  );
};

export default DoneList;
