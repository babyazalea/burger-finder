import React from "react";

import { useBurger } from "../../hooks/burger-hooks";

import BurgerAnalyzer from "./BurgerAnalyzer/BurgerAnalyzer";
import BurgerMaker from "./BurgerMaker/BurgerMaker";

const Burger = () => {
  const {
    ings,
    isAnalyzed,
    addIngredient,
    clearIngredients,
    fixedIngredients,
    initBurgerAnalyze,
  } = useBurger();

  let burger = (
    <BurgerMaker
      ings={ings}
      addIngredient={addIngredient}
      clearIngredients={clearIngredients}
      fixedIngredients={fixedIngredients}
      initBurgerAnalyze={initBurgerAnalyze}
    />
  );

  if (isAnalyzed) {
    burger = <BurgerAnalyzer ings={ings} isAnalyzed={isAnalyzed} />;
  }

  return burger;
};

export default Burger;
