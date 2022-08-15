import React, { useState } from "react";

export default function NumberRightTriangle() {
  const [input, setInput] = useState("");

  const generateNumberRightTriangle = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number.";
    } else {
      let total = "";
      const triangle = [];

      for (let i = 1; i <= input; i++) {
        total = total.concat(" " + i);
        triangle.push(total);
      }

      return triangle.map((data, index) => (
        <h1 className="col-12" key={index}>
          {data}
        </h1>
      ));
    }
  };

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 w-50 pb-3">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div>{generateNumberRightTriangle()}</div>
      </div>
    </div>
  );
}
