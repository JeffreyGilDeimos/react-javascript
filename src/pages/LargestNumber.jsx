import React, { useState } from "react";

export default function LargestNumber() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const getLargestNumber = () => {
    if (isNaN(firstInput) || !firstInput) {
      return "Please input first number";
    } else if (isNaN(secondInput) || !secondInput) {
      return "Please input second number";
    } else if (isNaN(thirdInput) || !thirdInput) {
      return "Please input Third number";
    } else if (
      parseFloat(firstInput) > parseFloat(secondInput) &&
      parseFloat(firstInput) > parseFloat(thirdInput)
    ) {
      return `${firstInput} is the Largest`;
    } else if (
      parseFloat(secondInput) > parseFloat(firstInput) &&
      parseFloat(secondInput) > parseFloat(thirdInput)
    ) {
      return `${secondInput} is the Largest`;
    } else if (
      parseFloat(thirdInput) > parseFloat(firstInput) &&
      parseFloat(thirdInput) > parseFloat(secondInput)
    ) {
      return `${thirdInput} is the Largest`;
    }
    //} else return Math.max(firstInput, secondInput, thirdInput);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col12 w-50 pb-5 pt-3">
          <input
            type="text"
            className="w-100 text-primary lead"
            placeholder="Input"
            value={firstInput}
            onChange={(event) => {
              setFirstInput(event.target.value);
            }}
          />
          <input
            type="text"
            className="w-100 text-primary lead"
            placeholder="Input"
            value={secondInput}
            onChange={(event) => {
              setSecondInput(event.target.value);
            }}
          />
          <input
            type="text"
            className="w-100 text-primary lead"
            placeholder="Input"
            value={thirdInput}
            onChange={(event) => {
              setThirdInput(event.target.value);
            }}
          />
        </div>
        <div>{getLargestNumber()}</div>
      </div>
    </div>
  );
}
