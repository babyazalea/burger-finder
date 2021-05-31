import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Modal from "../../../UI/Modal/Modal";
import Spinner from "../../../UI/Spinner/Spinner";
import Input from "../../../UI/Input/Input";
import { useHttp } from "../../../../hooks/http-hook";

import { Container, Button } from "react-bootstrap";
import "./ResetPassword.css";

const ResetPassword = (props) => {
  const [userEmail, setUserEmail] = useState(null);
  const [sendedResetPassword, setSendedResetPassword] = useState(false);

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const history = useHistory();

  const backToProfile = () => {
    history.goBack();
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setUserEmail(value);
  };

  const sendPasswordReset = async (email) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    const sendingData = {
      requestType: "PASSWORD_RESET",
      email: email,
    };

    try {
      await sendRequest(url, sendingData);
      setSendedResetPassword(true);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmError = () => {
    initializeError();
  };

  let passwordResetPart;
  if (props.notLoggedIn) {
    passwordResetPart = (
      <React.Fragment>
        <Input
          type="email"
          placeholder="이메일"
          name="email"
          onChange={onChange}
        />
        <Button variant="success" onClick={() => sendPasswordReset(userEmail)}>
          비밀번호 재설정 메일 보내기
        </Button>
      </React.Fragment>
    );
  } else {
    passwordResetPart = (
      <Button
        variant="success"
        onClick={() => sendPasswordReset(props.userEmail)}
      >
        비밀번호 재설정 메일 보내기
      </Button>
    );
  }

  return (
    <React.Fragment>
      <Container className="user-password__edit">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="reset-password__wrapper">
            {sendedResetPassword ? (
              <p className="password-reset__confirm-message">
                비밀번호 변경 메일을 보냈습니다. 메일을 확인해주세요.
              </p>
            ) : (
              <React.Fragment>{passwordResetPart}</React.Fragment>
            )}
            <Button variant="warning" onClick={backToProfile}>
              되돌아가기
            </Button>
          </div>
        )}
      </Container>
      <Modal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default ResetPassword;
