import React, { useRef, useState } from "react";

import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import "./BurgerController.scss";

const BurgerController = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInput = useRef(null);

  const handleText = () => setEnteredText(textInput.current.value);

  const addingIngredient = (event, text) => {
    props.addIngredient(event, text);
    textInput.current.value = "";
  };

  const clearingIngredients = () => {
    props.clearIngredients();
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
            <Button variant="info">찾기</Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      <div className="buttons">
        <Button variant="info" active onClick={clearingIngredients}>
          다시 하기
        </Button>
      </div>
    </Container>
  );
};

export default BurgerController;
