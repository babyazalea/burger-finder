import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context/auth-context";

import { Container, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

import "./AuthWithGoogle.css";
import { Button } from "react-bootstrap";

const AuthWithGoogle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authSuccess, setAuthSuccess] = useState(false);
  const authContext = useContext(AuthContext);

  const history = useHistory();
  const tokenFromParams = window.location.href.split("&")[1].split("=")[1];

  useEffect(() => {
    if (tokenFromParams) {
      setAuthSuccess(true);
      localStorage.setItem("access_token", tokenFromParams);
      setIsLoading(false);
    }
  }, [tokenFromParams]);

  const loginWithGoogleInFirebase = () => {
    authContext.signInToFirebase();
  };

  const backToAuth = () => {
    history.push("/auth");
  };

  let messageAndLink = (
    <div className="google-auth-message">
      <p>구글 인증에 실패했습니다.</p>
      <Button onClick={backToAuth}>로그인 창으로 돌아가기</Button>
    </div>
  );

  if (authSuccess) {
    messageAndLink = (
      <div className="google-auth-message">
        <p>구글 인증이 완료되었습니다. 구글 아이디로 로그인 하시겠습니까?</p>
        <Button onClick={loginWithGoogleInFirebase}>로그인</Button>
      </div>
    );
  }

  return (
    <Container className="google-auth-message-container">
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        messageAndLink
      )}
      {/* {authSuccess && !isLoading ? welcomeAndRedirect : noAccessTokenRedirect} */}
    </Container>
  );
};

export default AuthWithGoogle;
