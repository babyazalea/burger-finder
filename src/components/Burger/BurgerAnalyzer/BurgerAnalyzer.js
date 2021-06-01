import React from "react";

import { burgerRanker } from "../../../utils/burger-ranker";

import MyBurger from "./MyBurger/MyBurger";
import AnalysisResults from "./AnalysisResults/AnalysisResults";

import { Container } from "react-bootstrap";
import "./BurgerAnalyzer.css";

const BurgerAnalyzer = (props) => {
  const scoreBoard = burgerRanker(props.ings);

  const sortedScoreBoard = scoreBoard
    .sort(function (a, b) {
      if (a.score > b.score) {
        return -1;
      }

      if (a.score < b.score) {
        return 1;
      }

      return 0;
    })
    .slice(0, 3);

  let analyzer = <p>not...ok</p>;

  if (props.isAnalyzed && sortedScoreBoard.length) {
    analyzer = sortedScoreBoard.map((burgerResult, index) => {
      return (
        <AnalysisResults
          key={burgerResult.name + index}
          name={burgerResult.name}
          index={index}
          score={burgerResult.score}
          realBurger={burgerResult.realBurger}
        />
      );
    });
  }

  return (
    <Container className="burger-analyzer">
      <div className="result-board">
        <MyBurger />
        <ul>{analyzer}</ul>
      </div>
    </Container>
  );
};

export default BurgerAnalyzer;
