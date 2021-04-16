import React from "react";
import { Container } from "react-bootstrap";
import BurgerText from "./BurgerText/BurgerText";
import BurgerController from "./BurgerController/BurgerController";

import "./BurgerMaker.css";

const BurgerMaker = () => {
  return (
    <Container className="burger-maker">
      <BurgerController />
      <BurgerText />
    </Container>
  );
};

export default BurgerMaker;
