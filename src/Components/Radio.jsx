import React, { useState } from "react";

export const Radio = () => {
  const [radio, setRadio] = useState("red");

  const radioChange = (e) => {
    setRadio(e.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        name="colors"
        value="red"
        onChange={radioChange}
        checked={radio === "red"}
      />
      Red
      <input
        type="radio"
        name="colors"
        value="green"
        onChange={radioChange}
        checked={radio === "green"}
      />
      Green
      <input
        type="radio"
        name="colors"
        value="blue"
        onChange={radioChange}
        checked={radio === "blue"}
      />
      Blue
    </div>
  );
};
