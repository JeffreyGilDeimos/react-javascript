import React from "react";
import { useState } from "react";

export default function Vowels() {
  const [input, setInput] = useState("");

  const getVowels = (character) => {
    let total = 0;
    input.split("").forEach((character) => {
      if (
        character.toLowerCase().match(/[aeiou]/)

        // character.toLocaleLowerCase() === "a" ||
        // character.toLocaleLowerCase() === "e" ||
        // character.toLocaleLowerCase() === "i" ||
        // character.toLocaleLowerCase() === "o" ||
        // character.toLocaleLowerCase() === "u"
      ) {
        total = total + 1;
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
            value={getVowels()}
          />
        </div>
      </div>
    </div>
  );
}
