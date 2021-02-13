import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Burger from "./Burger/Burger";
import BurgerController from "./BurgerController/BurgerController";

import "./BurgerMaker.scss";

const BurgerMaker = () => {
  const [ingredients, setIngredients] = useState({
    lidBun: 1,
    lettuce: 1,
    patty: 1,
    bottomBun: 1,
  });

  return (
    <Container className="burger-maker">
      <Burger ingredients={ingredients} />
      <BurgerController />
    </Container>
  );
};

export default BurgerMaker;
