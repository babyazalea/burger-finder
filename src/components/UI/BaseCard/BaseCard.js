import React from "react";

import "./BaseCard.scss";

const BaseCard = (props) => (
  <div className={`base-card ${props.otherClassName || ""}`}>
    {props.children}
  </div>
);

export default BaseCard;
