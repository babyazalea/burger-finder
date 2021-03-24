import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

// import BaseCard from "../BaseCard/BaseCard";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <span>ok</span>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
