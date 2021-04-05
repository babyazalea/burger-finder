import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Modal.scss";

const Modal = (props) => {
  const app = document.getElementById("App");

  if (!props.isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="backdrop" onClick={props.closeModal}></div>
      <div className="modal-inside">
        {props.children}
        <button
          className="burger-modal-close-button"
          onClick={props.closeModal}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    </div>,
    app
  );
};

export default Modal;
