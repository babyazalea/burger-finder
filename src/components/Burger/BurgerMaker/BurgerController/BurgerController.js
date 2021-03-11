import React, { useContext, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { BurgerContext } from "../../../../context/burger-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import "./BurgerController.scss";

const BurgerController = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInput = useRef(null);

  const burgerContext = useContext(BurgerContext);

  const handleText = () => setEnteredText(textInput.current.value);

  const addingIngredient = (event, text) => {
    burgerContext.addIngredient(event, text);
  };

  const clearingIngredients = () => {
    burgerContext.clearIngredients();
  };

  const fixedIngredients = () => {
    burgerContext.fixedIngredients();
    props.history.push("/analyze");
  };

  const resetInput = () => {
    textInput.current.value = "";
  };

  const escapeOnInput = (event) => {
    if (event.key === "Escape") {
      textInput.current.value = "";
    }
  };

  return (
    <Container className="burger-controller">
      <form
        onSubmit={(event) => {
          addingIngredient(event, enteredText);
        }}
      >
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button
              className="reset-button"
              variant="info"
              type="button"
              onClick={resetInput}
            >
              <FontAwesomeIcon icon="eraser" />
            </Button>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleText}
            ref={textInput}
            onKeyUp={(event) => {
              escapeOnInput(event);
            }}
            autoFocus
          />
          <InputGroup.Append>
            <Button className="add-button" variant="info" type="submit">
              <FontAwesomeIcon icon="plus" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      <div className="buttons">
        <Button variant="info" onClick={clearingIngredients}>
          다시 하기
        </Button>
        <Button variant="success" onClick={fixedIngredients}>
          만들기
        </Button>
      </div>
    </Container>
  );
};

export default withRouter(BurgerController);
