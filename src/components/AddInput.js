import React from "react";

const AddInput = ({ characterLimit, handleAdd, handleChange, input }) => {
  return (
    <>
      <div className="input-field">
        <div style={{ flex: 1 }}>
          <input
            onChange={handleChange}
            value={input}
            type="text"
            placeholder="Enter Note"
          />
        </div>
        <button className="add" onClick={handleAdd}>
          Add
        </button>
      </div>
      <h4 style={{ textAlign: "right" }}>
        {characterLimit - input.length} character remaining
      </h4>
    </>
  );
};

export default AddInput;
