import React, { useContext } from "react";
import { BurgerContext } from "../../../../context/burger-context";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Container } from "react-bootstrap";
import "./BurgerText.scss";

const BurgerText = (props) => {
  const burgerContext = useContext(BurgerContext);

  let transformedIngredients = Object.keys(burgerContext.ingredients).map(
    (igKey) => {
      return [...Array(burgerContext.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }
  );
  return (
    <Container className="burger-text">{transformedIngredients}</Container>
  );
};

export default BurgerText;
