import React from "react";

import { FormControl, InputGroup } from "react-bootstrap";

const Input = (props) => {
  return (
    <InputGroup className="sm-3">
      {props.label ? (
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{props.label}</InputGroup.Text>
        </InputGroup.Prepend>
      ) : null}
      <FormControl
        value={props.passedValue}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        aria-label={props.ariaLabel}
        onChange={props.onChange}
      />
    </InputGroup>
  );
};

export default Input;
