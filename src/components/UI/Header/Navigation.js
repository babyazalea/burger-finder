import React from "react";
import Navbar from "react-bootstrap/Navbar";

import "./Navigation.scss";

const Navigation = (props) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Burger Finder</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
