import React, { useState } from "react";

export default function RightTriangle() {
  const [input, setInput] = useState("");
  const sequence = [];

  const getRightTriangle = () => {
    if (isNaN(input) || !input) {
      return "Please input number";
    }

    let total = "";
    for (var i = 1; i <= input; i++) {
      total = total.concat(" *");
      sequence.push(total);

      //sequence.push(<br />);
    }
    // return <h2>0</h2>;

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
        <div>{getRightTriangle()}</div>
      </div>
    </div>
  );
}
