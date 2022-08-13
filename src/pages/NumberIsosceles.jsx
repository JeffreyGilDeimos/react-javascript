import React, { useState } from "react";

export default function Triangle() {
  const [input, setInput] = useState("");
  const rightTriangle = [];

  const generateTriangle = () => {
    if (parseInt(input) < 1) {
      return "Cannot execute.";
    }

    let total = "";

    for (var i = 1; i <= input; i++) {
      total = total.concat(" ", i);
      rightTriangle.push(total);
    }
    //const reverseRightTriangle = rightTriangle.slice().reverse().slice(1);
    const fullTriangle = [].concat(
      rightTriangle,
      rightTriangle.slice().reverse().slice(1)
    );

    return fullTriangle.map((data) => (
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
        <div>{generateTriangle()}</div>
      </div>
    </div>
  );
}
