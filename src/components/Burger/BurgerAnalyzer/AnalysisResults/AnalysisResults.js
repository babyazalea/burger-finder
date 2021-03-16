import React from "react";

import "./AnalysisResults.scss";

const AnalysisResults = (props) => (
  <li className="burger-ranking-item">
    <span className="burger-ranking-rank">{props.index + 1}</span>
    <span className="burger-ranking-name">{props.name}</span>
    <span className="burger-ranking-score">{props.score}</span>
  </li>
);

export default AnalysisResults;
