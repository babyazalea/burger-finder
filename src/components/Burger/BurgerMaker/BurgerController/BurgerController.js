import React, { useRef, useState } from "react";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import "./BurgerController.css";

const BurgerController = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInput = useRef(null);

  const handleText = () => setEnteredText(textInput.current.value);

  const resetInput = () => {
    textInput.current.value = "";
  };

  const keyActivate = (event) => {
    if (event.key === "Escape") {
      resetInput();
    } else if (event.keyCode === 66 && event.ctrlKey) {
      props.fixedIngredients();
    } else if (event.keyCode === 78 && event.altKey) {
      props.clearIngredients();
    }
  };

  return (
    <Container className="burger-controller">
      <form
        onSubmit={(event) => {
          props.addIngredient(event, enteredText);
        }}
      >
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button
              className="ingredients-reset-button"
              variant="info"
              type="button"
              onClick={resetInput}
              title="esc"
            >
              <FontAwesomeIcon icon="eraser" />
            </Button>
          </InputGroup.Prepend>
          <FormControl
            aria-label="ingredient"
            aria-describedby="basic-addon2"
            onChange={handleText}
            ref={textInput}
            onKeyUp={(event) => {
              keyActivate(event);
            }}
            autoFocus
          />
          <InputGroup.Append>
            <Button
              className="ingredient-add-button"
              variant="info"
              type="submit"
              title="enter"
            >
              <FontAwesomeIcon icon="plus" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      <div className="burger-controller-output-btn">
        <Button variant="info" onClick={props.clearIngredients} title="alt + n">
          다시 하기
        </Button>
        <Button
          variant="success"
          onClick={props.fixedIngredients}
          title="ctrl + b"
        >
          만들기
        </Button>
      </div>
    </Container>
  );
};

export default withRouter(BurgerController);
