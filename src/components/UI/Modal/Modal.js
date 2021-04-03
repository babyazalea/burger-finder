import React, { useState } from "react";
import ReactDOM from "react-dom";

import BaseCard from "../BaseCard/BaseCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Modal.scss";

const Modal = (props) => {
  const [urlExtensionState, setUrlExtexsionState] = useState(false);
  const [cardAnimationClass, setCardAnimationClass] = useState("");

  const app = document.getElementById("App");

  if (!props.isOpen) return null;

  let urlExtensionBtn = "";
  let urlExtension = "";

  const openExtension = () => {
    setUrlExtexsionState(true);
    setCardAnimationClass("clicked");
  };

  const closeExtension = () => {
    setUrlExtexsionState(false);
    setCardAnimationClass("");
  };

  if (props.url && !urlExtensionState) {
    urlExtensionBtn = (
      <button onClick={openExtension} className="modal-expension-btn">
        <FontAwesomeIcon icon="chevron-down" />
      </button>
    );
  } else if (props.url && urlExtensionState) {
    urlExtensionBtn = (
      <button onClick={closeExtension} className="modal-expension-btn">
        <FontAwesomeIcon icon="chevron-up" />
      </button>
    );
  }

  if (urlExtensionState) {
    const brandUrl = props.url.url;
    const brandNameEN = props.url.brandName;
    let brandNameKR = "";

    switch (brandNameEN) {
      case "burgerking":
        brandNameKR = "버거킹";
        break;
      case "mcdonalds":
        brandNameKR = "맥도날드";
        break;
      case "lotteria":
        brandNameKR = "롯데리아";
        break;
      case "kfc":
        brandNameKR = "KFC";
        break;
      case "momstouch":
        brandNameKR = "맘스터치";
        break;
      case "shakeshack":
        brandNameKR = "셰이크쉑";
        break;
      case "subway":
        brandNameKR = "서브웨이";
        break;
      default:
        brandNameKR = "브랜드";
        break;
    }

    urlExtension = (
      <BaseCard customClassName="modal-child-base-card">
        <a
          href={brandUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${brandNameEN}-link`}
        >
          <span>{brandNameKR} 바로가기</span>
        </a>
      </BaseCard>
    );
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="backdrop" onClick={props.closeModal}></div>
      <div className="modal-inside">
        <BaseCard
          customClassName={`${cardAnimationClass} modal-parent-base-card`}
        >
          <div className="burger-modal-text">
            <span className="burger-ranking-rank">{props.burgerRankText}</span>
            <span className="burger-ranking-name">{props.burgerName}</span>
            <span className="burger-ranking-score">
              ( {props.burgerScoreText} )
            </span>
            {urlExtensionBtn}
            {urlExtension}
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
