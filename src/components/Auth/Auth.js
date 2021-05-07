import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/auth-context";

import { Container, FormControl, InputGroup, Button } from "react-bootstrap";

import "./Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSignup = (event) => {
    event.preventDefault();
    authContext.authWithEmailAndPassword(email, password, "signup");
  };

  const onLogin = (event) => {
    event.preventDefault();
    authContext.authWithEmailAndPassword(email, password, "login");
  };

  const cliId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

  const redirectUri = encodeURIComponent("http://localhost:3000/auth/google/");

  const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${redirectUri}&client_id=${cliId}`;

  return (
    <Container className="authentication-wrapper">
      <form>
        <InputGroup className="sm-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="아이디"
            aria-label="user-email"
            name="email"
            onChange={onChange}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="sm-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">PW</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="비밀번호"
            name="password"
            aria-label="password"
            onChange={onChange}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </form>
      <div className="authentication-buttons">
        <Button variant="info" onClick={onSignup}>
          가입하기
        </Button>
        <Button variant="success" onClick={onLogin}>
          로그인
        </Button>
        <a href={url}>google</a>
      </div>
    </Container>
  );
};

export default Auth;
