import React, { useState } from "react";

export default function Triangle() {
  const [input, setInput] = useState("");

  const getTriangle = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number.";
    } else {
      let total = "";
      const triangle = [];

      for (let i = 1; i <= input; i++) {
        total = total.concat(" *");
        triangle.push(total);
      }

      const nextTriangle = [].concat(
        triangle,
        triangle.slice().reverse().slice(1)
      );

      return nextTriangle.map((data, index) => (
        <h1 className="col-12" key={index}>
          {data}
        </h1>
      ));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 py-5 fs-2 text-primary">
          <input
            type="text"
            placeholder="input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <h1 className="col-4 py-5 text-primary">{getTriangle()}</h1>
      </div>
    </div>
  );
}
