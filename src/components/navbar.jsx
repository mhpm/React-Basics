import React, { Component } from "react";

//Stateless Functional component
const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secundary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
