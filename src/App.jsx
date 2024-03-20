import "./App.css";
import { Acomp } from "./Components/Acomp";
import { CheckBox } from "./Components/CheckBox";
import { Input } from "./Components/Input";
import { MultipleInputs } from "./Components/MultipleInputs";
import { Radio } from "./Components/Radio";
import { Select } from "./Components/Select";
import { TextArea } from "./Components/TextArea";
import React, { useState } from "react";
import { Bcomp } from "./Components/Bcomp";

function App() {
  const [show, setShow] = useState("");

  const handleShow = (data) => {
    setShow(data);
  };

  return (
    <div className="App">
      {/* <Input /> */}
      {/* <TextArea /> */}
      {/* <Select /> */}
      {/* <CheckBox /> */}
      {/* <Radio /> */}
      {/* <MultipleInputs /> */}
      <Acomp handleShow={handleShow} />
      <Bcomp text={show} />
    </div>
  );
}

export default App;
