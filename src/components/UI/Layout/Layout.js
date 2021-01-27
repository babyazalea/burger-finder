import React from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Header/Navigation";

const Layout = (props) => {
  return (
    <Container fluid="true">
      <Navigation />
    </Container>
  );
};

export default Layout;
