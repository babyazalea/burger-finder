import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import { Container, Button } from "react-bootstrap";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Spinner from "../UI/Spinner/Spinner";

import "./Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const onLogin = (event) => {
    event.preventDefault();
    authContext.authWithEmailAndPassword(email, password, "login");
  };

  const cliId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

  const redirectUri = encodeURIComponent("http://localhost:3000/auth/google/");

  const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${redirectUri}&client_id=${cliId}`;

  return (
    <React.Fragment>
      <Container className="auth__wrapper">
        {authContext.isLoading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <form>
              <div className="auth__input-group">
                <Input
                  label="ID"
                  type="text"
                  placeholder="이메일"
                  name="email"
                  aria-label="email"
                  change={(e) => onChange(e)}
                />
                <Input
                  label="PW"
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  aria-label="password"
                  change={(e) => onChange(e)}
                />
              </div>
              <div className="auth__submit-controll">
                <Button variant="success" onClick={onLogin}>
                  로그인
                </Button>
              </div>
            </form>
            <div className="auth__control">
              <a href={url}>
                <Button>
                  <FontAwesomeIcon icon={["fab", "google"]} />
                </Button>
              </a>
              <Link to="/auth/signup">
                <Button>가입하러 가기</Button>
              </Link>
            </div>
          </React.Fragment>
        )}
      </Container>
      <Modal error={authContext.error} />
    </React.Fragment>
  );
};

export default Auth;
