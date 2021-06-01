import React from "react";

import BaseCard from "../../../UI/BaseCard/BaseCard";

import "./MyBurger.css";

const MyBurger = () => {
  return (
    <BaseCard customClassName="my__burger">
      <span>내가만든버거</span>
      <h1>🍔</h1>
    </BaseCard>
  );
};

export default MyBurger;
