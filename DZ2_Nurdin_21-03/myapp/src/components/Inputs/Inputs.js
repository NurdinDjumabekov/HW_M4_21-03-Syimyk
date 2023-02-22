import React, { useState } from "react";
import inputsCss from "./Inputs.module.css";
export const Inputs = () => {
  const [serachInput, setSerachInput] = useState("Недоступно");
  const [addInput, setAddInput] = useState("Epsont");
  console.log(addInput);
  console.log(serachInput);

  return (
    <div className={inputsCss.parent_input}>
      <div>
        <input
          className={inputsCss.input}
          type="text"
          onChange={(e) => setSerachInput(e.target.value)}
        />
        <p>{serachInput}</p>
      </div>
      <div>
        <input
          className={inputsCss.input}
          type="text"
          onChange={(e) => setAddInput(e.target.value)}
        />
        <p>{addInput}</p>
      </div>
    </div>
  );
};
