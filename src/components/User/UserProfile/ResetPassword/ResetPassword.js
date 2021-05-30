import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Modal from "../../../UI/Modal/Modal";
import Spinner from "../../../UI/Spinner/Spinner";
import { useHttp } from "../../../../hooks/http-hook";

import { Button } from "react-bootstrap";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [sendedResetPassword, setSendedResetPassword] = useState(false);

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
  }, []);

  const history = useHistory();

  const backToProfile = () => {
    history.goBack();
  };

  const sendPasswordReset = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    const sendingData = {
      requestType: "PASSWORD_RESET",
      email: userEmail,
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

  return (
    <React.Fragment>
      <div className="user-password__edit">
        {isLoading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {sendedResetPassword ? (
              <p className="password-reset__confirm-message">
                비밀번호 변경 메일을 보냈습니다. 메일을 확인해주세요.
              </p>
            ) : (
              <Button variant="success" onClick={sendPasswordReset}>
                비밀번호 변경 메일 보내기
              </Button>
            )}
            <Button variant="warning" onClick={backToProfile}>
              되돌아가기
            </Button>
          </React.Fragment>
        )}
      </div>
      <Modal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default ResetPassword;
