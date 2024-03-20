import React, { useState } from "react";

export const Input = () => {
  const [text, setText] = useState("");
  const [textShow, setTextShow] = useState("");

  const textChange = (event) => {
    console.log(event);
    setText(event.target.value);
    setTextShow(text);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    setText("");

    setTextShow(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={textChange} />

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={textChange} />
        <button type="submit">submit</button>
      </form>

      <h1>{textShow}</h1>
    </div>
  );
};
