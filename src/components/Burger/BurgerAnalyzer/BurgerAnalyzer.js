import React, { useContext } from "react";

import { BurgerContext } from "../../../context/burger-context";
import burgers from "../../../assets/data/burgers-data";

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
  //burger finder done

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

  let analyzer = <p>not...ok</p>;

  if (burgerContext.isAnalyzed && sortedScoreBoard.length) {
    analyzer = sortedScoreBoard.map((burgerResult, index) => {
      return (
        <li key={burgerResult.name}>
          <span>{index + 1}</span>
          <span>{burgerResult.name}</span>
          <span>{burgerResult.score}</span>
        </li>
      );
    });
  }

  return <Container className="burger-analyzer">{analyzer}</Container>;
};

export default BurgerAnalyzer;
