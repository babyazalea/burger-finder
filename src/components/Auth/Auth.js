import React, { useContext, useRef, useState } from "react";

import { AuthContext } from "../../context/auth-context";

import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Spinner,
} from "react-bootstrap";
import Modal from "../UI/Modal/Modal";

import "./Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputEl = useRef();
  const passwordInputEl = useRef();

  const authContext = useContext(AuthContext);

  const onChange = (event) => {
    const {
      target: { name },
    } = event;

    if (name === "email") {
      setEmail(emailInputEl.current.value);
    } else if (name === "password") {
      setPassword(passwordInputEl.current.value);
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
    <Container className="auth__wrapper">
      {authContext.isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <React.Fragment>
          <form>
            <div className="auth__input-group">
              <InputGroup className="sm-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="e-mail"
                  aria-label="user-email"
                  name="email"
                  ref={emailInputEl}
                  onChange={onChange}
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="sm-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">PW</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  aria-label="password"
                  ref={passwordInputEl}
                  onChange={onChange}
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="auth__submit-controll">
              {authContext.signUpMode ? (
                <Button onClick={onSignup}>가입</Button>
              ) : (
                <Button variant="success" onClick={onLogin}>
                  로그인
                </Button>
              )}
            </div>
          </form>
          {authContext.signUpMode ? null : (
            <div className="auth__control">
              <a href={url}>
                <Button>
                  <FontAwesomeIcon icon={["fab", "google"]} />
                </Button>
              </a>
              <Button onClick={authContext.changeToSignUp}>
                가입하러 가기
              </Button>
            </div>
          )}
          <Modal error={authContext.error} />
        </React.Fragment>
      )}
    </Container>
  );
};

export default Auth;
