import React from "react";

import { Container } from "react-bootstrap";
import "./BurgerController.scss";

const BurgerController = (props) => (
  <Container className="burger-controller">
    <input type="text" autoFocus />
  </Container>
);

export default BurgerController;
