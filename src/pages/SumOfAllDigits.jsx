import React, { useState } from "react";

export default function SumOfAllDigits() {
  const [input, setInput] = useState("");

  const getSum = () => {
    let total = 0;

    input.split("").forEach((character) => {
      if (!isNaN(character)) {
        total = total + parseInt(character);
      }
    });
    return total;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 py-5 w-50 fs-2">
          <input
            type="text"
            name="text"
            placeholder="input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="col-6 py-5 w-50">
          <h1 className="text-primary">{getSum()}</h1>
        </div>
      </div>
    </div>
  );
}
