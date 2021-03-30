import React from "react";

import "./BurgerIngredient.scss";

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "lidBun":
      ingredient = (
        <div className="ingredient lid-bun">
          <h2>뚜껑</h2>
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div className="ingredient cheese">
          <h2>치즈</h2>
        </div>
      );
      break;
    case "hamburgPatty":
      ingredient = (
        <div className="ingredient hamburg-patty">
          <h2>고기 패티</h2>
        </div>
      );
      break;
    case "porkPatty":
      ingredient = (
        <div className="ingredient pork-patty">
          <h2>돼지고기 패티</h2>
        </div>
      );
      break;
    case "beefPatty":
      ingredient = (
        <div className="ingredient beef-patty">
          <h2>소고기 패티</h2>
        </div>
      );
      break;
    case "lettuce":
      ingredient = (
        <div className="ingredient lettuce">
          <h2>양상추</h2>
        </div>
      );
      break;
    case "bottomBun":
      ingredient = (
        <div className="ingredient bottom-bun">
          <h2>받침대</h2>
        </div>
      );
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
