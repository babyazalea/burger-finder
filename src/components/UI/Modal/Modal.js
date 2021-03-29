import React from "react";
import ReactDOM from "react-dom";

import BaseCard from "../BaseCard/BaseCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Modal.scss";

const Modal = (props) => {
  const app = document.getElementById("App");
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="backdrop" onClick={props.closeModal}></div>
      <div className="modal-inside">
        <BaseCard>
          <div className="burger-modal-text">
            <span className="burger-ranking-rank">{props.burgerRankText}</span>
            <span className="burger-ranking-name">{props.burgerName}</span>
            <span className="burger-ranking-score">
              ( {props.burgerScoreText} )
            </span>
            <button className="modal-expension-btn">
              <FontAwesomeIcon icon="chevron-down" />
            </button>
          </div>
          <button
            className="burger-modal-close-button"
            onClick={props.closeModal}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </BaseCard>
      </div>
    </div>,
    app
  );
};

export default Modal;
