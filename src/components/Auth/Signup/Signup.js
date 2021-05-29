import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useHttp } from "../../../hooks/http-hook";

import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";

import { Button } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassowordError] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const history = useHistory();

  useEffect(() => {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setPassowordError(false);
    }
  }, [password, confirmPassword]);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm-password") {
      setConfirmPassword(value);
    }
  };

  const onSignup = async (event) => {
    event.preventDefault();

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const signupData = {
      email,
      password,
      returnSecureToken: true,
    };

    if (password === confirmPassword) {
      try {
        await sendRequest(url, signupData);

        history.push("/");
      } catch (err) {
        console.log(err);
      }
    } else {
    }
  };

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <div className="signup__wrapper">
        {isLoading ? (
          <Spinner />
        ) : (
          <form>
            <div className="signup__input-group">
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
              <Input
                label="PW"
                type="password"
                placeholder="비밀번호 확인"
                name="confirm-password"
                aria-label="confirm-password"
                change={(e) => onChange(e)}
              />
            </div>
            <div className="auth__submit-controll">
              <Button
                variant="success"
                onClick={onSignup}
                disabled={passwordError}
              >
                가입
              </Button>
            </div>
          </form>
        )}
      </div>
      <Modal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default Signup;
