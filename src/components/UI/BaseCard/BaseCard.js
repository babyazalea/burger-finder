import React from "react";

import "./BaseCard.scss";

const BaseCard = (props) => (
  <div
    className={
      props.customClassName ? `base-card ${props.customClassName}` : "base-card"
    }
  >
    {props.children}
  </div>
);

export default BaseCard;
