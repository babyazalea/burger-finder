import React from "react";
import { Container } from "react-bootstrap";
import BurgerText from "./BurgerText/BurgerText";
import BurgerController from "./BurgerController/BurgerController";

import "./BurgerMaker.css";

const BurgerMaker = (props) => {
  return (
    <Container className="burger-maker">
      <BurgerController
        addIngredient={props.addIngredient}
        clearIngredients={props.clearIngredients}
        fixedIngredients={props.fixedIngredients}
        initBurgerAnalyze={props.initBurgerAnalyze}
      />
      <BurgerText ings={props.ings} />
    </Container>
  );
};

export default BurgerMaker;
