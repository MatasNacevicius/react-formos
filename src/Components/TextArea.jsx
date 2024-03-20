import React, { useState } from "react";

export const TextArea = () => {
  const [text, setText] = useState("");

  const textChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <textarea value={text} onChange={textChange}></textarea>
    </div>
  );
};
