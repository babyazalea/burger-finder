import React, { useContext, useEffect } from "react";

import { BurgerContext } from "../../../context/burger-context";
import burgers from "../../../assets/data/burgers-data";

import AnalysisResults from "./AnalysisResults/AnalysisResults";

import "./BurgerAnalyzer.css";
import { Container } from "react-bootstrap";

const BurgerAnalyzer = () => {
  const burgerContext = useContext(BurgerContext);

  let scoreBoard = [];

  // burger finder start
  const burgerKeys = Object.keys(burgers);

  const scoringFunction = (userIngs, burgerIngs) => {
    let score = 100;

    const userIngsKeys = Object.keys(userIngs);
    // const burgerIngsKeys = Object.keys(burgerIngs);
    // const keysAbs = Math.abs(userIngsKeys - burgerIngsKeys);

    // score -= keysAbs;

    userIngsKeys.forEach((key) => {
      if (userIngs[key] !== burgerIngs[key]) {
        score -= 1;
      }
    });

    return score;
  };

  for (let burgerKey in burgerKeys) {
    const burgerName = burgerKeys[burgerKey];
    const score = scoringFunction(
      burgerContext.ingredients,
      burgers[burgerName]
    );
    const burgerResult = {
      name: burgerName,
      score: score,
      url: burgers[burgerName].realBurgerUrl
        ? burgers[burgerName].realBurgerUrl
        : null,
    };
    scoreBoard.push(burgerResult);
  }
  // burger finder end

  /// burgers sorting start

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

  /// burgers sorting end

  let analyzer = <p>not...ok</p>;

  if (burgerContext.isAnalyzed && sortedScoreBoard.length) {
    analyzer = sortedScoreBoard.map((burgerResult, index) => {
      return (
        <AnalysisResults
          key={burgerResult.name + index}
          name={burgerResult.name}
          index={index}
          score={burgerResult.score}
          url={burgerResult.url}
        />
      );
    });
  }

  return (
    <Container className="burger-analyzer">
      <div className="result-board">
        <ul>{analyzer}</ul>
      </div>
    </Container>
  );
};

export default BurgerAnalyzer;
