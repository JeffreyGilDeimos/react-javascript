import React from "react";

//Take input from the user
const number = parseInt( prompt('Enter a positive number'));


function Fibonacci() {

var first = 0;
var second = 1;
const sequence = [];

const generateFibonacci = () => {
  //Second scenario
  if (number===1){
    return <h2>0</h2>;
  } else if (number===2) {
    return [0,1].map((data, index) => <h2 className="text-primary" key={index}>{data}</h2>);
  }

  //Third scenario

  for (var i = 1; i <= number; i++) {
    sequence.push(first);

    var nextTerm = first + second;
    first = second;
    second = nextTerm;
  }
  return sequence.map((data, index) => <h2 className="text-primary" key={index}>{data}</h2>);
  
};

  return (
     <div className="p-5">
    <h1>Enter the number of terms:{number}</h1>
    <h2>Fibonacci Series</h2>
    {generateFibonacci()}
  </div>
  );
}

export default Fibonacci;