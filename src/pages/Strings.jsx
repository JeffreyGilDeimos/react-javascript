import React, { useState } from "react";

export default function Strings() {
  const [input, setInput] = useState("");

  const reverseString = () => {
    if (!input) {
      return "Please Input String to Reverse.";
    } else
      return input
        .split("")
        .reverse("")
        .join("")
        .split(" ")
        .reverse("")
        .join(" ");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-5 w-50">
          <input
            type="text"
            placeholder="input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>

        <div>{reverseString()}</div>
      </div>
    </div>
  );
}
