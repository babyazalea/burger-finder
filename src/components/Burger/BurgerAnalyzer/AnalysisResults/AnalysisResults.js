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
        burgerRank={props.index + 1}
        burgerScore={props.score}
      ></Modal>
    </React.Fragment>
  );
};

export default AnalysisResults;
