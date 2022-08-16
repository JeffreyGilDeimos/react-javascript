import React, { useState } from "react";

export default function NumberIsosceles() {
  const [input, setInput] = useState("");

  const getTriangle = () => {
    if (isNaN(input) || !input) {
      return "PLease enter a number.";
    } else {
      const sequence = [];
      let total = "";
      for (let i = 1; i <= input; i++) {
        total = total.concat(" ", i);
        sequence.push(total);
      }

      const nextTriangle = [].concat(
        sequence,
        sequence.slice().reverse().slice(1)
      );
      return nextTriangle.map((data, index) => <h1 key={index}>{data}</h1>);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 py-5 fs-4 text-primary">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="col-4 py-5 fs-4 text-primary">{getTriangle()}</div>
      </div>
    </div>
  );
}
