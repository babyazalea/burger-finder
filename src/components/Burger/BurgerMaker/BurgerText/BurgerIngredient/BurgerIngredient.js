import React from "react";

import "./BurgerIngredient.css";

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
    case "lettuce":
      ingredient = (
        <div className="ingredient lettuce">
          <h2>양상추</h2>
        </div>
      );
      break;
    case "pickle":
      ingredient = (
        <div className="ingredient pickle">
          <h2>피클</h2>
        </div>
      );
      break;
    case "onion":
      ingredient = (
        <div className="ingredient onion">
          <h2>양파</h2>
        </div>
      );
      break;
    case "tomato":
      ingredient = (
        <div className="ingredient tomato">
          <h2>토마토</h2>
        </div>
      );
      break;
    case "spicySauce":
      ingredient = (
        <div className="ingredient spicy-sauce">
          <h2>매운 소스</h2>
        </div>
      );
      break;
    case "bicmacSauce":
      ingredient = (
        <div className="ingredient bicmac-sauce">
          <h2>빅맥 소스</h2>
        </div>
      );
      break;
    case "teriyakiSauce":
      ingredient = (
        <div className="ingredient teriyaki-sauce">
          <h2>데리야끼 소스</h2>
        </div>
      );
      break;
    case "ketchupSauce":
      ingredient = (
        <div className="ingredient ketchup-sauce">
          <h2>케첩 소스</h2>
        </div>
      );
      break;
    case "mayoSauce":
      ingredient = (
        <div className="ingredient mayo-sauce">
          <h2>마요 소스</h2>
        </div>
      );
      break;
    case "hamburgPatty":
      ingredient = (
        <div className="ingredient hamburg-patty">
          <h2>햄버그 패티</h2>
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
    case "shrimpPatty":
      ingredient = (
        <div className="ingredient shrimp-patty">
          <h2>새우 패티</h2>
        </div>
      );
      break;
    case "chickenPatty":
      ingredient = (
        <div className="ingredient chicken-patty">
          <h2>치킨 패티</h2>
        </div>
      );
      break;
    case "vegetablePatty":
      ingredient = (
        <div className="ingredient vegetable-patty">
          <h2>식물성 패티</h2>
        </div>
      );
      break;
    case "extraBread":
      ingredient = (
        <div className="ingredient extra-bread">
          <h2>빵</h2>
        </div>
      );
      break;
    case "hashBrown":
      ingredient = (
        <div className="ingredient hash-brown">
          <h2>해쉬브라운</h2>
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
