import React from "react";

import BaseCard from "../../../UI/BaseCard/BaseCard";

import "./AnalysisResults.scss";

const AnalysisResults = (props) => {
  let results;

  if (props.score === 100) {
    results = (
      <li className="burger-ranking-item">
        <BaseCard otherClassName="perfect-match-burger">
          <span className="burger-ranking-rank">{props.index + 1}</span>
          <span className="burger-ranking-name">{props.name}</span>
          <span className="burger-ranking-score">{props.score}</span>
        </BaseCard>
      </li>
    );
  } else {
    results = (
      <li className="burger-ranking-item">
        <BaseCard>
          <span className="burger-ranking-rank">{props.index + 1}</span>
          <span className="burger-ranking-name">{props.name}</span>
          <span className="burger-ranking-score">{props.score}</span>
        </BaseCard>
      </li>
    );
  }

  return results;
};

export default AnalysisResults;
