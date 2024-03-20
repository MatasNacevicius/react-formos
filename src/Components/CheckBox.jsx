import React, { useState } from "react";

export const CheckBox = () => {
  const [check, setCheck] = useState(0);

  const checkboxChange = () => {
    setCheck((checked) => !checked);
  };

  return (
    <div>
      <input type="checkbox" onChange={checkboxChange} checked={check} />
    </div>
  );
};
