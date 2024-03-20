import React, { useState } from "react";

export const Acomp = ({ handleShow }) => {
  const [text, setText] = useState("");

  const textChange = (event) => {
    setText(event.target.value);
    handleShow(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={textChange} />
    </div>
  );
};
