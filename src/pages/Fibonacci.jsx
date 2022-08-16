import React, { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState("");

  const getFibonacci = () => {
    let sequence = [];
    let first = 0;
    let second = 1;
    let total = 0;

    if (isNaN(input) || !input) {
      return "Please enter a number.";
    } else if (parseInt(input) < 1) {
      return "Please enter positive integer.";
    } else if (parseInt(input) === 1) {
      return 0;
    } else if (parseInt(input) === 2) {
      return [0, 1].map((data) => <h1>{data}</h1>);
    } else {
      for (let i = 1; i <= input; i++) {
        sequence.push(first);
        total = first + second;
        first = second;
        second = total;
      }
    }

    return sequence.map((data) => <h1>{data}</h1>);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 py-5 fs-2 text-primary">
          <input
            type="text"
            placeholder="input"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <h1 className="col-4 py-5 text-primary">{getFibonacci()}</h1>
      </div>
    </div>
  );
}
