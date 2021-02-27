import React, { useContext, useRef, useState } from "react";
import { BurgerContext } from "../../../../context/burger-context";

import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import "./BurgerController.scss";

const BurgerController = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInput = useRef(null);

  const burgerContext = useContext(BurgerContext);

  const handleText = () => setEnteredText(textInput.current.value);

  const addingIngredient = (event, text) => {
    burgerContext.addIngredient(event, text);
    textInput.current.value = "";
  };

  const clearingIngredients = () => {
    burgerContext.clearIngredients();
  };

  const fixedIngredients = () => {
    burgerContext.fixedIngredients();
  };

  return (
    <Container className="burger-controller">
      <form
        onSubmit={(event) => {
          addingIngredient(event, enteredText);
        }}
      >
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleText}
            ref={textInput}
          />
          <InputGroup.Append>
            <Button className="add-button" variant="info" type="submit">
              <span>+</span>
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

export default BurgerController;
