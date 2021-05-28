import React from "react";

import { FormControl, InputGroup } from "react-bootstrap";

const Input = (props) => {
  return (
    <InputGroup className="sm-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">{props.label}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        aria-label={props.ariaLabel}
        onChange={props.change}
      />
    </InputGroup>
  );
};

export default Input;
