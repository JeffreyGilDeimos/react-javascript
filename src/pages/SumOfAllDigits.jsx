import React from "react";
import { useState } from "react";

export default function SumOfAllDigits() {
  const [input, setInput] = useState("");

  const SumOfAllNumbers = (character) => {
    let total = 0;

    input.split("").forEach((character) => {
      if (!isNaN(character)) {
        total = total + parseInt(character);
      }
    });
    return total;
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
            className="text-primary"
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={SumOfAllNumbers()}
          />
        </div>
      </div>
    </div>
  );
}

// function SumOfAllDigits() {
//   const [input, setInput] = useState("");
//   let total = 0;
//   const SumOfAll = () => {
//     input.split("").map((data) => {
//       if (!isNaN(data)) {
//         total = total + parseInt(data);
//       }
//     });

//     return total;
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
//             className="text-primary"
//             name="text"
//             id="text"
//             cols="30"
//             rows="10"
//             readOnly={true}
//             placeholder="Output"
//             value={SumOfAll()}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

//export default SumOfAllDigits;
