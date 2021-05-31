import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useHttp } from "../../hooks/http-hook";

import { Container, Button } from "react-bootstrap";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Spinner from "../UI/Spinner/Spinner";

import "./Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const googleOAuthUrl = process.env.REACT_APP_GOOGLE_OAUTH_URL;

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

  const onLogin = async (event) => {
    event.preventDefault();

    const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const getUserDataUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const loginData = {
      email,
      password,
      returnSecureToken: true,
    };

    try {
      const responseData = await sendRequest(loginUrl, loginData);

      const token = { idToken: responseData["idToken"] };
      const userDataResponse = await sendRequest(getUserDataUrl, token);
      const userData = await userDataResponse.users[0];

      props.login(responseData, userData);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <Container className="auth__wrapper">
        {isLoading ? (
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
              <a href={googleOAuthUrl}>
                <Button>
                  <FontAwesomeIcon icon={["fab", "google"]} />
                </Button>
              </a>
              <Link to="/auth/signup">
                <Button>가입하러 가기</Button>
              </Link>
              <Link to="/users/reset-password">
                <Button>비밀번호를 잃어버리셨나요?</Button>
              </Link>
            </div>
          </React.Fragment>
        )}
      </Container>
      <Modal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default Auth;
