import React from "react";
import { Container } from "react-bootstrap";
import Burger from "./Burger/Burger";
import BurgerController from "./BurgerController/BurgerController";

const BurgerMaker = () => {
  return (
    <Container>
      <Burger />
      <BurgerController />
    </Container>
  );
};

export default BurgerMaker;
