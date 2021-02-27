import React, { useContext } from "react";
import { BurgerContext } from "../../../context/burger-context";

import { Container } from "react-bootstrap";

const BurgerAnalyzer = () => {
  const burgerContext = useContext(BurgerContext);

  let analyzer = <p>not...ok</p>;

  if (burgerContext.ingredients.patty >= 1) {
    analyzer = <p>Analyzer</p>;
  }

  return <Container className="burger-analyzer">{analyzer}</Container>;
};

export default BurgerAnalyzer;
