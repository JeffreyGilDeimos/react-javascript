import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol class="list-group">
        <li class="list-group-item">Click the title to navigate to the page</li>

        <li class="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-info">
          <Link to="/multiplication-table">Multiplication Table</Link>
        </li>
        <li class="list-group-item list-group-item-secondary">
          <Link to="/sum-of-natural">Sum of Natural Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-light">
          <Link to="/sum-of-all-digits">Sum of All Digits</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/check-within-100-500">Check within 100 to 500</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/right-triangle">Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/triangle">Isosceles Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/number-right-triangle">Number Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/largest-number">Get the Largest number</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/vowels">Get the number of Vowels</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/number-isosceles">Number Isosceles</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
