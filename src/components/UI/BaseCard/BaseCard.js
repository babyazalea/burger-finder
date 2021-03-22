import React from "react";

import "./BaseCard.scss";

const BaseCard = (props) => {
  let className;
  if (props.otherClassName) {
    className = "base-card " + props.otherClassName;
  } else {
    className = "base-card";
  }

  return <div className={className}>{props.children}</div>;
};

export default BaseCard;
