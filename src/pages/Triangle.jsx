import React, { useState } from "react";

function Triangle() {
  const [input, setInput] = useState("");
  const sequence = [];

  const generateTriangle = () => {
    if (parseInt(input) < 1) {
      return "Cannot execute.";
    } else if (parseInt(input) >= 10) {
      return "Too long to execute.";
    }

    for (var i = 1; i <= input; i++) {
      sequence.push("*");
    }
    // return <h2>0</h2>;

    return sequence.map((data, index) => (
      <h2 className="text-primary" key={index}>
        {data}
      </h2>
    ));
  };
  // };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-2">
          <input
            type="text"
            class="w-100"
            placeholder="Enter a number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <h2>Result</h2>
          <div className="d-flex  border border-2 border-dark">
            {generateTriangle()}
          </div>

          {/* <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={generateTriangle()}
          ></textarea> */}
        </div>
      </div>
    </div>
  );
}

export default Triangle;
