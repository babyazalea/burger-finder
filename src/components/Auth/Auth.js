import React from "react";
import { Container, FormControl, InputGroup, Button } from "react-bootstrap";

import "./Auth.css";

const Auth = () => {
  return (
    <Container className="authentication-wrapper">
      <form>
        <InputGroup className="sm-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="아이디"
            aria-label="username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="sm-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">PW</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="비밀번호"
            aria-label="password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </form>
      <div className="authentication-buttons">
        <Button variant="info">가입하기</Button>
        <Button variant="success">로그인</Button>
      </div>
    </Container>
  );
};

export default Auth;
