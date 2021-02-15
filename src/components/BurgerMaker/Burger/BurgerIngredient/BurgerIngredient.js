import React from "react";

// import lidBunImage from "../../../../assets/images/lid-bun-final.png";
// import pattyImage from "../../../../assets/images/patty-final.png";
// import lettuceImage from "../../../../assets/images/lettuce-final.png";
// import cheeseImage from "../../../../assets/images/cheese-final.png";
// import bottomBunImage from "../../../../assets/images/bottom-bun-final.png";

import "./BurgerIngredient.scss";

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "lidBun":
      ingredient = (
        <div className="lid-bun">
          <h2>뚜껑</h2>
        </div>
      );
      break;
    case "patty":
      ingredient = (
        <div className="patty">
          <h2>고기_패티</h2>
        </div>
      );
      break;
    case "lettuce":
      ingredient = (
        <div className="lettuce">
          <h2>양상추</h2>
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div className="cheese">
          <h2>치즈</h2>
        </div>
      );
      break;
    case "bottomBun":
      ingredient = (
        <div className="bottom-bun">
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
