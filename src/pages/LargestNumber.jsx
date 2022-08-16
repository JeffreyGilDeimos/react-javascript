import React, { useState } from "react";

export default function LargestNumber() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const getLargest = () => {
    let largest = 0;
    if (isNaN(firstInput) || !firstInput) {
      return "Please enter First number.";
    } else if (isNaN(secondInput) || !secondInput) {
      return "Please enter Second number.";
    } else if (isNaN(thirdInput) || !thirdInput) {
      return "Please enter Third number.";
    } else {
      largest = Math.max(firstInput, secondInput, thirdInput);
      return `${largest} is the Largest number.`;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="py-5 d-flex">
          <input
            type="text"
            className="fs-2"
            placeholder="First number"
            onChange={(e) => {
              setFirstInput(e.target.value);
            }}
          />
          <input
            type="text"
            className="fs-2"
            placeholder="Second number"
            onChange={(e) => {
              setSecondInput(e.target.value);
            }}
          />
          <input
            type="text"
            className="fs-2"
            placeholder="Third number"
            onChange={(e) => {
              setThirdInput(e.target.value);
            }}
          />
        </div>
        <div className=" text-primary">
          <h1>{getLargest()}</h1>
        </div>
      </div>
    </div>
  );
}
