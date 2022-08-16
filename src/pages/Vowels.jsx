import React, { useState } from "react";

export default function Vowels() {
  const [input, setInput] = useState("");

  const getVowels = () => {
    let total = 0;
    if (!input) {
      return "Please input.";
    } else {
      input.split("").forEach((character) => {
        if (character.toLowerCase().match(/[aeiou]/)) {
          total = total + 1;
        }
      });
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
          <div className="ps-5 text-primary">
            <h1>{getVowels()}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
