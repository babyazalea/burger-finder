import React, { useState, useContext } from "react";

import { AuthContext } from "../../../context/auth-context";

import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";

import { Button } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const authContext = useContext(AuthContext);

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

  const onSignup = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      authContext.authWithEmailAndPassword(email, password, "signup");
    }
  };

  return (
    <React.Fragment>
      <div className="signup__wrapper">
        {authContext.isLoading ? (
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
              <Button variant="success" onClick={onSignup}>
                가입
              </Button>
            </div>
          </form>
        )}
      </div>
      <Modal error={authContext.error} />
    </React.Fragment>
  );
};

export default Signup;
