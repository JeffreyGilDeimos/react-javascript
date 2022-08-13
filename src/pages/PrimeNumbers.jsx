import React from "react";
import { useState } from "react";

export default function PrimeNumbers() {
  const [input, setInput] = useState("");

  const getPrime = () => {
    let isPrime = true;

    if (isNaN(input) || !input) {
      return "Please enter a number";
    } else if (parseInt(input) < 1) {
      return "The number is not a PRIME number";
    } else if (parseInt(input) === 1) {
      return "1 is neither a prime nor a composite number";
    } else {
      for (let i = 2; i < parseInt(input); i++) {
        if (parseInt(input) % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    return isPrime
      ? `${input} is a prime number`
      : `${input} is NOT a prime number`;
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        <h1 className="col-12 w-100 text-primary">{getPrime(input)}</h1>
      </div>
    </div>
  );
}
//export default PrimeNumbers;

// import React from "react";
// import { useState } from "react";

// function PrimeNumbers() {
//   const [input, setInput] = useState(1);

//   const CheckIfPrimeNumber = (number) => {
//     let isPrime = true;

//     //Check if letter or null
//     if (isNaN(number) || !number) {
//       return "Please enter a number";
//     }

//     //Check if less than 1
//     else if (parseInt(number) < 1) {
//       return "The number is NOT a prime number.";
//     }
//     //Check if number is equal to 1
//     else if (parseInt(number) === 1) {
//       return "1 is neither prime nor composite number.";
//     }

//     //Check if number is greater than 1
//     else {
//       for (let i = 2; i < parseInt(number); i++) {
//         if (parseInt(number) % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }

//       return isPrime
//         ? `${number} is a prime number`
//         : `${number} is NOT a prime number`;
//     }
//   };

//   return (
//     <div className="container p-5">
//       <div className="row">
//         <div className="col-md-5">
//           <input
//             type="text"
//             className="w-100 lead"
//             placeholder="Input"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>
//         <div className="col-md-5">
//           <textarea
//             className="w-100 lead text-primary"
//             type="text"
//             placeholder="Output"
//             readOnly={true}
//             value={CheckIfPrimeNumber(input)}
//           ></textarea>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PrimeNumbers;
