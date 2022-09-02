import React, { useState } from "react";

export default function MultiplicationTable() {
  const [input, setInput] = useState("");

  const numberMultiplied = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number.";
    } else {
      const sequence = [];
      let total = 0;
      let total1 = "";
      for (let i = 1; i <= 10; i++) {
        total = i * input;
        total1 = total1.concat(" ", total);
      }
      sequence.push(total1);
      return sequence.map((data) => <h1>{data}</h1>);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 py-5 w-50 fs-2">
          <input
            type="text"
            value={input}
            placeholder="input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="col-6 py-5 fs-2 text-primary">{numberMultiplied()}</div>
      </div>
    </div>
  );
}
