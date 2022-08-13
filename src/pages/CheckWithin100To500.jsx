import React, { useState } from "react";

export default function CheckWithin100To500() {
  const [input, setInput] = useState("");

  const checkNumber = () => {
    if (isNaN(input) || !input) {
      return "Please input number";
    }
    // } else if (input < 100 || input > 500) {
    //   return "FALSE";
    // } else {
    //   return "TRUE";
    // }

    return `${100 <= parseInt(input) && parseInt(input) <= 500}`;
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
        <div>{checkNumber()}</div>
      </div>
    </div>
  );
}
