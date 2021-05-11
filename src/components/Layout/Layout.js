import React from "react";
import { Container } from "react-bootstrap";

import Navigation from "../UI/Navigation/Navigation";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Container
      id="burger-finder-layout"
      className="burger-finder-layout"
      fluid="true"
    >
      <header>
        <Navigation />
      </header>
      <main>{props.children}</main>
    </Container>
  );
};

export default Layout;
