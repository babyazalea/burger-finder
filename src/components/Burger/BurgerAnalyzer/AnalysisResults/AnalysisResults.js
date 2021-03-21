import React from "react";

import BaseCard from "../../../UI/BaseCard/BaseCard";

import "./AnalysisResults.scss";

const AnalysisResults = (props) => (
  <li className="burger-ranking-item">
    <BaseCard>
      <span className="burger-ranking-rank">{props.index + 1}</span>
      <span className="burger-ranking-name">{props.name}</span>
      <span className="burger-ranking-score">{props.score}</span>
    </BaseCard>
  </li>
);

export default AnalysisResults;
