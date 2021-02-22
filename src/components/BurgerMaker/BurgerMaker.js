import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Burger from "./Burger/Burger";
import BurgerController from "./BurgerController/BurgerController";

import "./BurgerMaker.scss";

const BurgerMaker = () => {
  const [ingredients, setIngredients] = useState({
    lidBun: 1,
    lettuce: 0,
    cheese: 0,
    patty: 0,
    bottomBun: 1,
  });

  const addIngredient = (event, text) => {
    event.preventDefault();
    const oldIngredients = ingredients;
    let convertedText = "";

    switch (text) {
      case "뚜껑":
      case "top":
        convertedText = "lidBun";
        break;
      case "패티":
      case "고기":
      case "고기패티":
        convertedText = "patty";
        break;
      case "양상추":
      case "채소":
      case "풀":
        convertedText = "lettuce";
        break;
      case "치즈":
      case "노랑":
        convertedText = "cheese";
        break;
      case "받침대":
      case "bottom":
        convertedText = "bottomBun";
        break;
      default:
        convertedText = "";
        break;
    }

    let updatedLidBunCount;
    if (oldIngredients[convertedText]) {
      updatedLidBunCount = oldIngredients[convertedText] + 1;
    } else {
      updatedLidBunCount = 1;
    }
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[convertedText] = updatedLidBunCount;
    setIngredients(updatedIngredients);
  };

  const clearIngredients = () => {
    setIngredients({
      lidBun: 1,
      lettuce: 0,
      cheese: 0,
      patty: 0,
      bottomBun: 1,
    });
  };

  return (
    <Container className="burger-maker">
      <BurgerController
        addIngredient={addIngredient}
        clearIngredients={clearIngredients}
      />
      <Burger ingredients={ingredients} />
    </Container>
  );
};

export default BurgerMaker;
