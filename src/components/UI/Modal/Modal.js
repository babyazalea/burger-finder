import React from "react";
import ReactDOM from "react-dom";

import BaseCard from "../BaseCard/BaseCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Modal.scss";

const Modal = (props) => {
  const app = document.getElementById("App");
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.closeModal}>
      <BaseCard>
        <div className="burger-modal-text">
          <span>{props.burgerRank}</span>
          <span>{props.burgerName}</span>
          <span>{props.burgerScore}</span>
        </div>
        <button
          className="burger-modal-close-button"
          onClick={props.closeModal}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </BaseCard>
    </div>,
    app
  );
};

export default Modal;
