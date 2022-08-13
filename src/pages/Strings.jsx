import React from "react";
import { useState } from "react";

export default function Strings() {
  const [input, setInput] = useState("");

  const getReverseString = () => {
    return input
      .split("")
      .reverse("")
      .join("")
      .split(" ")
      .reverse("")
      .join(" ");
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
        <h1 className="col-12 w-100 text-primary">{getReverseString()}</h1>
      </div>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";

// function Strings() {
//   const [input, setInput] = useState("");

//   return (
//     <div className="container p-5">
//       <div className="row">
//         <div className="col-md-5">
//           <input
//             type="text"
//             class="w-100 lead"
//             placeholder="Input"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>

//         <div className="col-md-5">
//           <textarea
//             name="text"
//             id="text"
//             cols="30"
//             rows="10"
//             readOnly={true}
//             placeholder="Output"
//             value={input
//               .split("")
//               .reverse("")
//               .join("")
//               .split(" ")
//               .reverse("")
//               .join(" ")}
//           ></textarea>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Strings;
