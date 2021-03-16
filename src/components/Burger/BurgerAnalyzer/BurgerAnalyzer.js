import React, { useContext } from "react";

import { BurgerContext } from "../../../context/burger-context";
import burgers from "../../../assets/data/burgers-data";

import AnalysisResults from "./AnalysisResults/AnalysisResults";

import "./BurgerAnalyzer.scss";
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

  for (let burgerKey of burgerKeys) {
    const score = scoringFunction(
      burgerContext.ingredients,
      burgers[burgerKey]
    );
    const burgerResult = {
      name: burgerKey,
      score: score,
    };
    scoreBoard.push(burgerResult);
  }
  // burger finder end

  /// burgers sorting start

  const sortedScoreBoard = scoreBoard.sort(function(a, b) {
    if (a.score > b.score) {
      return -1;
    }

    if (a.score < b.score) {
      return 1;
    }

    return 0;
  });

  /// burgers sorting end

  let analyzer = <p>not...ok</p>;

  if (burgerContext.isAnalyzed && sortedScoreBoard.length) {
    analyzer = sortedScoreBoard.map((burgerResult, index) => {
      return (
        // <li key={burgerResult.name}>
        //   <span className="burger__ranking__rank">{index + 1}</span>
        //   <span className="burger__ranking__name">{burgerResult.name}</span>
        //   <span className="burger__ranking__score">{burgerResult.score}</span>
        // </li>
        <AnalysisResults
          key={burgerResult.name}
          name={burgerResult.name}
          index={index}
          score={burgerResult.score}
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
