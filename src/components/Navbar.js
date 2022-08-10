import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            JavaScript Examples
          </NavLink>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Fibonacci
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/strings">
                  Strings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/prime-numbers">
                  Prime-Numbers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;