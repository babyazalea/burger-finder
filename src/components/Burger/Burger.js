import React, { useContext } from "react";

import { BurgerContext } from "../../context/burger-context";

import BurgerAnalyzer from "./BurgerAnalyzer/BurgerAnalyzer";
import BurgerMaker from "./BurgerMaker/BurgerMaker";

const Burger = () => {
  const burgerContext = useContext(BurgerContext);

  let burger = <BurgerMaker />;

  if (burgerContext.isAnalyzed) {
    burger = <BurgerAnalyzer />;
  }

  return burger;
};

export default Burger;
