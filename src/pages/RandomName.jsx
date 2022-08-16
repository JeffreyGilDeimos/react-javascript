import React, { useState } from "react";

export default function RandomName() {
  const [output, setOutput] = useState("");
  const names = [
    "Ramboo",
    "SpiderMan",
    "Batman",
    "Deadpool",
    "Avengers",
    "Avatar",
    "Jeffrey",
  ];

  const getName = () => {
    const index = Math.floor(Math.random() * 7);
    return setOutput(names[index]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 py-5">
          <button className="btn btn-secondary" onClick={() => getName()}>
            Name Randomizer
          </button>
        </div>
        <div className="col-4 py-5">
          <h1 className="text-primary">{output}</h1>
        </div>
      </div>
    </div>
  );
}
