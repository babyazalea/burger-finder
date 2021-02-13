import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import { Container } from "react-bootstrap";
import "./Burger.scss";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <Container className="burger">
      {/* <BurgerIngredient type="lid-bun" />
      <BurgerIngredient type="lettuce" />
      <BurgerIngredient type="patty" />
      <BurgerIngredient type="bottom-bun" /> */}
      {transformedIngredients}
    </Container>
  );
};

export default Burger;
