import React, { useState } from "react";

import BaseCard from "../../../UI/BaseCard/BaseCard";
import Modal from "../../../UI/Modal/Modal";

import "./AnalysisResults.scss";

const AnalysisResults = (props) => {
  const [modalState, setModalState] = useState(false);

  let className = "burger-ranking-item";
  const widthAndHeight = 150 - (props.index + 1) * 10;
  const fontSize = -props.index + 3 + "rem";

  if (props.score === 100) {
    className += " perfect-match-burger";
  }

  const showModal = () => {
    setModalState(true);
  };

  const closeModal = (prevState) => {
    setModalState(!prevState);
  };

  // converted burger result
  let burgerRankText = "";
  let burgerScoreText = "";

  if (props.index === 0 && props.score === 100) {
    burgerRankText = "햄버거와 통했습니다.";
    burgerScoreText = "백점 만점";
  } else if (props.index === 1 && props.score > 97) {
    burgerRankText = "그리 멀지 않은 곳에....";
    burgerScoreText = "";
  }

  return (
    <React.Fragment>
      <li
        className={className}
        style={{
          width: widthAndHeight + "%",
          height: widthAndHeight + "%",
          fontSize: fontSize,
        }}
        onClick={showModal}
      >
        <BaseCard>
          <span className="burger-ranking-name">{props.name}</span>
        </BaseCard>
      </li>
      <Modal
        isOpen={modalState}
        closeModal={closeModal}
        burgerName={props.name}
        burgerRankText={props.index + 1}
        burgerScoreText={props.score}
      ></Modal>
    </React.Fragment>
  );
};

export default AnalysisResults;
