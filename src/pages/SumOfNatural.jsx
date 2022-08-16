import React, { useState } from "react";

export default function SumOfNatural() {
  const [input, setInput] = useState("");

  const getSum = () => {
    if (!input) {
      return "Please input number.";
    } else {
      let total = 0;
      for (let i = 1; i <= input; i++) {
        total = total + i;
      }

      return total;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="py-5 d-flex">
          <input
            type="text"
            className="fs-2"
            placeholder="input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div className="ps-5">
            <h1 className="text-primary">{getSum()}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
