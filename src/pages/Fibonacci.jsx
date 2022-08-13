import React, { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState("");

  const getFibonacci = () => {
    if (isNaN(input) || !input) {
      return "Please input number";
    } else if (input === "1") {
      return "0";
    } else if (input === "2") {
      return [0, 1].map((data) => (
        <h1 className="col-12 w-100 text-primary">{data}</h1>
      ));
    } else {
      const sequence = [];
      let firstNumber = 0;
      let secondNumber = 1;

      for (let i = 1; i <= input; i++) {
        sequence.push(firstNumber);

        let nextTerm = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextTerm;
      }
      return sequence.map((data) => (
        <h1 className="col-12 w-100 text-primary">{data}</h1>
      ));
    }
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
        <div>{getFibonacci()}</div>
      </div>
    </div>
  );
}

// import React from "react";

// //Take input from the user
// const number = parseInt(prompt("Enter a positive number"));

// function Fibonacci() {
//   var first = 0;
//   var second = 1;
//   const sequence = [];

//   const generateFibonacci = () => {
//     //Second scenario
//     if (number === 1) {
//       return <h2>0</h2>;
//     } else if (number === 2) {
//       return [0, 1].map((data, index) => (
//         <h2 className="text-primary" key={index}>
//           {data}
//         </h2>
//       ));
//     }

//     //Third scenario

//     for (var i = 1; i <= number; i++) {
//       sequence.push(first);

//       var nextTerm = first + second;
//       first = second;
//       second = nextTerm;
//     }
//     return sequence.map((data, index) => (
//       <h2 className="text-primary" key={index}>
//         {data}
//       </h2>
//     ));
//   };

//   return (
//     <div className="p-5">
//       <h1>Enter the number of terms:{number}</h1>
//       <h2>Fibonacci Series</h2>
//       {generateFibonacci()}
//     </div>
//   );
// }

// export default Fibonacci;
