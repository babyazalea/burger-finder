import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import { useHttp } from "../../../hooks/http-hook";
import { AuthContext } from "../../../context/auth-context";

import Spinner from "../../UI/Spinner/Spinner";

import { Container, Button } from "react-bootstrap";
import "./AuthWithGoogle.css";
import Modal from "../../UI/Modal/Modal";

const AuthWithGoogle = () => {
  const [getToken, setGetToken] = useState(false);
  const [tokenLoading, setTokenLoading] = useState(true);

  const { isLoading, error, initializeError, sendRequest } = useHttp();
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const tokenFromParams = window.location.href.split("&")[1].split("=")[1];

  useEffect(() => {
    if (tokenFromParams) {
      setGetToken(true);
      localStorage.setItem("access_token", tokenFromParams);
      setTokenLoading(false);
    }
  }, [tokenFromParams]);

  const loginWithGoogleInFirebase = async () => {
    const accessToken = localStorage.getItem("access_token");

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const authData = {
      postBody: `access_token=${accessToken}&providerId=google.com`,
      requestUri: "http://localhost:3000",
      returnIdpCredential: true,
      returnSecureToken: true,
    };

    try {
      const responseData = await sendRequest(url, authData);

      authContext.googleLogin(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const backToAuth = () => {
    history.push("/auth");
    localStorage.clear();
  };

  let messageAndLink = (
    <div className="google-auth-message">
      <p>구글 인증에 실패했습니다.</p>
      <Button onClick={backToAuth} variant="warning">
        로그인 페이지로 돌아가기
      </Button>
    </div>
  );

  if (getToken) {
    messageAndLink = (
      <div className="google-auth-message">
        <p>구글 인증이 완료되었습니다. 구글 아이디로 로그인 하시겠습니까?</p>
        <Button onClick={loginWithGoogleInFirebase} variant="success">
          로그인
        </Button>
        <Button onClick={backToAuth} variant="warning">
          로그인 페이지로 돌아가기
        </Button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Container className="google-auth-message-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {authContext.isLoading || tokenLoading ? (
              <Spinner />
            ) : (
              messageAndLink
            )}
          </React.Fragment>
        )}
      </Container>
      <Modal error={error} />
    </React.Fragment>
  );
};

export default AuthWithGoogle;
