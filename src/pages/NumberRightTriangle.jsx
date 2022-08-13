import React, { useState } from "react";

export default function NumberRightTriangle() {
  const [input, setInput] = useState("");
  const sequence = [];

  const getNumberRightTriangle = () => {
    if (isNaN(input) || !input) {
      return "Please input number";
    }

    let total = "";

    for (var i = 1; i <= input; i++) {
      total = total.concat(" ", i);

      // total = total.concat(total, i);
      //  total1 = total.concat(total, total1);
      sequence.push(total);
    }

    return sequence.map((data) => (
      <h1 className="col-12 w-100 text-primary">{data}</h1>
    ));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col12 w-50 pb-5 pt-3">
          <input
            type="text"
            className="w-100 text-primary lead"
            placeholder="Input"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        <div>{getNumberRightTriangle()}</div>
      </div>
    </div>
  );
}
