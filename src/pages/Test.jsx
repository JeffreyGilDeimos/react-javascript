import React, { useState } from "react";

function Test() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  var first = 0;
  var second = 1;
  const sequence = [];

  const CheckIfPrimeNumber = (number) => {
    let isPrime = true;

    if (parseInt(number) < 1) {
      return "0 is NOT a prime number.";
    } else if (parseInt(number) === 1) {
      return "1 is neither prime nor composite number.";
    } else {
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

  const generateFibonacci = (number) => {
    //Second scenario
    if (number === 1) {
      return <h4>0</h4>;
    } else if (number === 2) {
      return [0, 1].map((data, index) => <h4 key={index}>{data}</h4>);
    }

    //Third scenario

    for (var i = 1; i <= number; i++) {
      sequence.push(first);

      var nextTerm = first + second;
      first = second;
      second = nextTerm;
    }
    return sequence.map((data, index) => <h4 key={index}>{data}</h4>);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <button onClick={() => setCount(count + 1)} className="mt-2 mb-3">
            Click me
          </button>
          <h4>You clicked {count} times</h4>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="pt-5">{CheckIfPrimeNumber(count)}</h4>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="pt-5">Fibonacci</h4>
          {generateFibonacci(count)}
        </div>
      </div>
    </div>
  );
}

export default Test;
