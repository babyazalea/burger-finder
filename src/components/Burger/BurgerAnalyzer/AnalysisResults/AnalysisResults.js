import React from "react";

import BaseCard from "../../../UI/BaseCard/BaseCard";

import "./AnalysisResults.scss";

const AnalysisResults = (props) => {
  let className = "burger-ranking-item";
  const widthAndHeight = 150 - (props.index + 1) * 10;
  const fontSize = -props.index + 3 + "rem";

  if (props.score === 100) {
    className += " perfect-match-burger";
  }

  return (
    <li
      className={className}
      style={{
        width: widthAndHeight + "%",
        height: widthAndHeight + "%",
        fontSize: fontSize,
      }}
      onClick={props.showModal}
    >
      <BaseCard>
        <span className="burger-ranking-name">{props.name}</span>
      </BaseCard>
    </li>
  );
};

export default AnalysisResults;
