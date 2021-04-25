import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context/auth-context";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const AuthWithGoogle = () => {
  const [authSuccess, setAuthSuccess] = useState(false);
  const authContext = useContext(AuthContext);

  const history = useHistory();
  const tokenFromParams = window.location.href.split("&")[1].split("=")[1];

  useEffect(() => {
    if (tokenFromParams) {
      setAuthSuccess(true);
      localStorage.setItem("access_token", tokenFromParams);
    }
  }, [tokenFromParams]);

  const loginWithGoogleInFirebase = () => {
    const callback = () => {
      const id = localStorage.getItem("localId");
      history.push(`/auth/profile/${id}`);
    };

    authContext.signInWithGoogle(callback);
  };

  const welcomeAndRedirect = (
    <div>
      <p>구글 인증이 완료되었습니다. 구글 아이디로 로그인 하시겠습니까?</p>
      <button onClick={loginWithGoogleInFirebase}>로그인</button>
    </div>
  );

  const noAccessTokenRedirect = (
    <div>
      <p>구글 인증에 실패했습니다.</p>
      <Link to="/auth">로그인 창으로 돌아가기</Link>
    </div>
  );

  return (
    <Container>
      {authSuccess ? welcomeAndRedirect : noAccessTokenRedirect}
    </Container>
  );
};

export default AuthWithGoogle;
