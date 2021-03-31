import React, { useState } from "react";

import initialIngredients from "../assets/data/initial-ingredients";

export const BurgerContext = React.createContext({
  ingredients: {},
  isAnalyzed: false,
  addIngredient: () => {},
  clearIngredients: () => {},
  fixedIngredients: () => {},
  initBurgerAnalyze: () => {},
});

const BurgerContextProvider = (props) => {
  const [ings, setIngs] = useState({
    ...initialIngredients,
    lidBun: 1,
    bottomBun: 1,
  });

  const [stateOfAnalyze, setStateOfAnalyze] = useState(false);

  const onAddIngredient = (event, text) => {
    event.preventDefault();
    const oldIngredients = ings;
    const convertedTextArg = text.replace(/\s/g, "");

    let convertedText = "";

    switch (convertedTextArg) {
      // lidBun
      case "뚜껑":
      case "top":
        convertedText = "lidBun";
        break;
      // cheese
      case "치즈":
      case "노랑":
      case "cheese":
        convertedText = "cheese";
        break;
      // hamburg patty
      case "패티":
      case "고기":
      case "고기패티":
      case "hamburgpatty":
        convertedText = "hamburgPatty";
        break;
      // pork patty
      case "돼지고기":
      case "돼지고기패티":
      case "porkpatty":
        convertedText = "porkPatty";
        break;
      // beef patty
      case "소고기":
      case "소고기패티":
      case "beefpatty":
        convertedText = "beefPatty";
        break;
      // fish patty
      case "새우":
      case "새우패티":
      case "명태":
      case "shrimppatty":
        convertedText = "shrimpPatty";
        break;
      // vegetable patty
      case "비건패티":
      case "vegetablepatty":
        convertedText = "vegetablePatty";
        break;
      // lettuce
      case "양상추":
      case "채소":
      case "풀":
      case "lettuce":
        convertedText = "lettuce";
        break;
      // pickle
      case "피클":
      case "오이":
      case "pickle":
        convertedText = "pickle";
        break;
      // onion
      case "양파":
      case "onion":
        convertedText = "onion";
        break;
      // tomato
      case "토마토":
      case "tomato":
        convertedText = "tomato";
        break;
      // spicy sauce
      case "매운맛":
      case "매운맛소스":
      case "매운":
      case "고추장베이스":
      case "spicysauce":
        convertedText = "spicySauce";
        break;
      // bicMac sauce
      case "빅맥소스":
      case "bicmacsauce":
        convertedText = "bicMacSauce";
        break;
      // teriyaki sauce
      case "데리야끼":
      case "데리야끼소스":
      case "teriyakisauce":
        convertedText = "teriyakiSauce";
        break;
      // ketchup sauce
      case "기본소스":
      case "케첩":
      case "케첩소스":
      case "ketchupsauce":
        convertedText = "ketchupSauce";
        break;
      // mayonnaise sauce
      case "마요":
      case "마요소스":
      case "mayosauce":
        convertedText = "mayoSauce";
        break;
      // bottomBun
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
      ...initialIngredients,
      lidBun: 1,
      bottomBun: 1,
    });
  };

  const onFixedIngredients = () => {
    setStateOfAnalyze(true);
  };

  const onInitBurgerAnalyze = () => {
    setStateOfAnalyze(false);
  };

  return (
    <BurgerContext.Provider
      value={{
        ingredients: ings,
        addIngredient: onAddIngredient,
        clearIngredients: onClearIngredients,
        isAnalyzed: stateOfAnalyze,
        fixedIngredients: onFixedIngredients,
        initBurgerAnalyze: onInitBurgerAnalyze,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContextProvider;
