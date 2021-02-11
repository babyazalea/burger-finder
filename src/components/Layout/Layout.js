import React from "react";
import { Container } from "react-bootstrap";

import Navigation from "../UI/Header/Navigation";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <Container fluid="true">
      <Navigation />
      <main>{props.children}</main>
    </Container>
  );
};

export default Layout;