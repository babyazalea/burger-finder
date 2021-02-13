import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import { Container } from "react-bootstrap";
import "./Burger.scss";

const Burger = (props) => (
  <Container className="burger">
    <BurgerIngredient type="lid-bun" />
    <BurgerIngredient type="lettuce" />
    <BurgerIngredient type="patty" />
    <BurgerIngredient type="bottom-bun" />
  </Container>
);

export default Burger;
