import React from "react";
import { useState } from "react";

function PrimeNumbers() {
  const [input, setInput] = useState(1);

  const CheckIfPrimeNumber = (number) => {
    let isPrime = true;

    //Check if letter or null
    if (isNaN(number) || !number) {
      return "Please enter a number";
    }

    //Check if less than 1
    else if (parseInt(number) < 1) {
      return "The number is NOT a prime number.";
    }
    //Check if number is equal to 1
    else if (parseInt(number) === 1) {
      return "1 is neither prime nor composite number.";
    }

    //Check if number is greater than 1
    else {
      for (let i = 2; i < parseInt(number); i++) {
        if (parseInt(number) % i === 0) {
          isPrime = false;
          break;
        }
      }

      return isPrime
        ? `${number} is a prime number`
        : `${number} is NOT a prime number`;
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <textarea
            className="w-100 lead text-primary"
            type="text"
            placeholder="Output"
            readOnly={true}
            value={CheckIfPrimeNumber(input)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default PrimeNumbers;
