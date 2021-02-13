import React from "react";

import lidBunImage from "../../../../assets/images/lid-bun-final.png";
import pattyImage from "../../../../assets/images/patty-final.png";
import lettuceImage from "../../../../assets/images/lettuce-final.png";
import cheeseImage from "../../../../assets/images/cheese-final.png";
import bottomBunImage from "../../../../assets/images/bottom-bun-final.png";

import "./BurgerIngredient.scoped.scss";

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "lidBun":
      ingredient = (
        <div className="lid-bun">
          <img src={lidBunImage} alt="lid-bun" />
        </div>
      );
      break;
    case "patty":
      ingredient = (
        <div className="patty">
          <img src={pattyImage} alt="patty" />
        </div>
      );
      break;
    case "lettuce":
      ingredient = (
        <div className="lettuce">
          <img src={lettuceImage} alt="lettuce" />
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div className="cheese">
          <img src={cheeseImage} alt="cheese" />
        </div>
      );
      break;
    case "bottomBun":
      ingredient = (
        <div className="lettuce">
          <img src={bottomBunImage} alt="bottom-bun" />
        </div>
      );
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
