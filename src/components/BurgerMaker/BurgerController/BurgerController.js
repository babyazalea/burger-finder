import React, { useRef, useState } from "react";

import { Container } from "react-bootstrap";
import "./BurgerController.scss";

const BurgerController = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInput = useRef(null);
  const handleText = () => setEnteredText(textInput.current.value);
  const addingIngredient = (event, text) => {
    props.addIngredient(event, text);
    textInput.current.value = "";
  };

  return (
    <Container className="burger-controller">
      <form
        onSubmit={(event) => {
          addingIngredient(event, enteredText);
        }}
      >
        <input type="text" autoFocus onChange={handleText} ref={textInput} />
        <button>submit</button>
      </form>
    </Container>
  );
};

export default BurgerController;
