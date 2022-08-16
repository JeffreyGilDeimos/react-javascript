import React, { useState } from "react";

export default function PrimeNumbers() {
  const [input, setInput] = useState("");
  let isPrime = true;

  const getPrime = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number.";
    } else if (parseInt(input) < 1) {
      return "The number is not a Prime.";
    } else if (parseInt(input) === 1) {
      return "The number is not a Prime nor composite.";
    } else {
      for (let i = 2; i < parseInt(input); i++) {
        if (parseInt(input) % i === 0) {
          isPrime = false;
        }
      }
    }
    return isPrime
      ? `${input} is a PRIME number`
      : `${input} is NOT PRIME number`;
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
            <h1>{getPrime()}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
