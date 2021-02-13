import React from "react";
import { Container } from "react-bootstrap";
import Burger from "./Burger/Burger";
import BurgerController from "./BurgerController/BurgerController";

import "./BurgerMaker.scss";

const BurgerMaker = () => {
  return (
    <Container className="burger-maker">
      <Burger />
      <BurgerController />
    </Container>
  );
};

export default BurgerMaker;
