import React from "react";
import { useState } from "react";

function Strings() {
  const [input, setInput] = useState("");

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            class="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="col-md-5">
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={input
              .split("")
              .reverse("")
              .join("")
              .split(" ")
              .reverse("")
              .join(" ")}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Strings;
