import React, { useState } from "react";

import BaseCard from "../../../UI/BaseCard/BaseCard";
import BurgerModal from "../../../UI/BurgerModal/BurgerModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AnalysisResults.css";

const AnalysisResults = (props) => {
  const [modalState, setModalState] = useState(false);
  const [urlExtensionState, setUrlExtexsionState] = useState(false);
  const [cardAnimationClass, setCardAnimationClass] = useState("");

  let className = "burger-ranking-item";
  const widthAndHeight = 110 - (props.index + 1) * 10;
  const fontSize = -props.index + 3 + "rem";

  if (props.score === 100) {
    className = " perfect-match-burger";
  }

  const showModal = () => {
    setModalState(true);
    console.log(modalState);
  };

  const closeModal = (prevState) => {
    setModalState(!prevState);
    setUrlExtexsionState(false);
    setCardAnimationClass("");
  };

  // converted rank & score

  let burgerRankText = "";
  let burgerScoreText = "";

  if (props.index === 0 && props.score === 100) {
    burgerRankText = "햄버거와 통한 것 같습니다.";
    burgerScoreText = "백점 만점";
  } else if (props.index >= 1 || (props.index < 3 && props.score > 96)) {
    burgerRankText = "당신이 찾던 그 햄버거일지도 모릅니다.";
    burgerScoreText = "점 하나 부족한 정도랄까요?";
  } else if (props.index > 2 && props.score > 80) {
    burgerRankText = "어딘가 닮긴 했는데...";
    burgerScoreText = "점점 멀어지나봐..?";
  } else if (props.index > 3 && props.score < 80) {
    burgerRankText = "찾는 버거가 아닐지도 몰라요.";
    burgerScoreText = "햄버거는 무수히 많은 점으로 이루어져 있다";
  }

  // modal

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

  if (props.realBurger && !urlExtensionState) {
    urlExtensionBtn = (
      <button onClick={openExtension} className="modal-expension-btn">
        <FontAwesomeIcon icon="chevron-down" />
      </button>
    );
  } else if (props.realBurger && urlExtensionState) {
    urlExtensionBtn = (
      <button onClick={closeExtension} className="modal-expension-btn">
        <FontAwesomeIcon icon="chevron-up" />
      </button>
    );
  }

  if (urlExtensionState) {
    const brandUrl = props.realBurger.url;
    const brandNameEN = props.realBurger.brandName;
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
      <BaseCard customClassName="burger__modal-child-base-card">
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
          {props.score === 100 && (
            <div className="celebration-stars">
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </div>
          )}
          <div className="burger-ranking">
            <span>{props.name}</span>
          </div>
        </BaseCard>
      </li>
      <BurgerModal
        isOpen={modalState}
        closeModal={closeModal}
        name={props.name}
        cardAnimationClass={cardAnimationClass}
        urlExtension={urlExtension}
        urlExtensionBtn={urlExtensionBtn}
        burgerRankText={burgerRankText}
        burgerScoreText={burgerScoreText}
      ></BurgerModal>
    </React.Fragment>
  );
};

export default AnalysisResults;
