import React, { useState } from "react";

export const Select = () => {
  const [select, setSelect] = useState("red");

  const selectChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <div>
      <select onChange={selectChange} value={select}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <p style={{ backgroundColor: select }}>lolas</p>
    </div>
  );
};
