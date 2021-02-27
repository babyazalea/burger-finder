import React, { useState } from "react";

export const BurgerContext = React.createContext({
  ingredients: {
    lidBun: 1,
    lettuce: 0,
    cheese: 0,
    patty: 0,
    bottomBun: 1,
  },
  isAnalyzed: false,
  addIngredient: () => {},
  clearIngredients: () => {},
  fixedIngredients: () => {},
});

const BurgerContextProvider = (props) => {
  const [ings, setIngs] = useState({
    lidBun: 1,
    lettuce: 0,
    cheese: 0,
    patty: 0,
    bottomBun: 1,
  });

  const [stateOfAnalyze, setStateOfAnalyze] = useState(false);

  const onAddIngredient = (event, text) => {
    event.preventDefault();
    const oldIngredients = ings;
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
      ...ings,
    };
    updatedIngredients[convertedText] = updatedLidBunCount;
    setIngs(updatedIngredients);
  };

  const onClearIngredients = () => {
    setIngs({
      lidBun: 1,
      lettuce: 0,
      cheese: 0,
      patty: 0,
      bottomBun: 1,
    });
  };

  const onFixedIngredients = () => {
    setStateOfAnalyze(true);
  };

  return (
    <BurgerContext.Provider
      value={{
        ingredients: ings,
        addIngredient: onAddIngredient,
        clearIngredients: onClearIngredients,
        isAnalyzed: stateOfAnalyze,
        fixedIngredients: onFixedIngredients,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContextProvider;
