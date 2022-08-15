import React, { useState } from "react";

export default function MultiplicationTable() {
  const [input, setInput] = useState("");

  const numberMultiplied = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number.";
    } else {
      const sequence = [];

      for (let i = 1; i <= 10; i++) {
        sequence.push(i * input);
      }

      return sequence.map((data) => <h6>{data}</h6>);
    }
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

        <div>
          <h6>{numberMultiplied()}</h6>
        </div>
      </div>
    </div>
  );
}
