import React, { useState } from "react";

export default function CheckWithin100To500() {
  const [input, setInput] = useState("");

  const getCheck = () => {
    if (isNaN(input) || !input) {
      return "Please enter number.";
    } else {
      return `${100 <= parseInt(input) && parseInt(input) <= 500}`;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 py-5 fs-2">
          <input
            type="text"
            placeholder="input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="col-4 py-5 text-primary">
          <h1>{getCheck()}</h1>
        </div>
      </div>
    </div>
  );
}
