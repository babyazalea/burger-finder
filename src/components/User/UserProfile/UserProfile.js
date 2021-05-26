import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context/auth-context";

import { Container, Spinner, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./UserProfile.css";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
    setUserName(
      localStorage.getItem("displayName") !== ""
        ? localStorage.getItem("displayName")
        : "이름 없음"
    );
    setPhotoUrl(
      localStorage.getItem("photoUrl") ? localStorage.getItem("photoUrl") : null
    );
  }, []);

  let profile;

  if (authContext.isLoggedIn && userEmail !== null && userName !== null) {
    profile = (
      <div className="user__profile">
        <div className="user__image">
          {photoUrl !== null ? (
            <img src={photoUrl} alt="profile" />
          ) : (
            <span>
              <FontAwesomeIcon icon="user-circle" />
            </span>
          )}
        </div>
        <p className="user__email">{userEmail}</p>
        <p className="user__name">{userName}</p>
      </div>
    );
  } else {
    profile = (
      <div className="error-message-box">
        <p>프로필을 불러오지 못했습니다.</p>
      </div>
    );
  }

  let verficaion;

  verficaion = authContext.isVerified ? null : (
    <div className="user__email__verification">
      {authContext.sendedVerification ? (
        <p>
          인증 메일을 {userEmail}로 보냈습니다. 이메일을 확인하시고 다시 로그인
          해주세요.
        </p>
      ) : (
        <Button onClick={authContext.emailVerification}>
          이메일 인증 하기
        </Button>
      )}
    </div>
  );

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  let editButton;

  editButton = authContext.isVerified ? (
    <div className="user__profile__edit-btn">
      {editMode ? (
        <React.Fragment>
          <Button onClick={toggleEditMode} variant="warning">
            수정 취소
          </Button>
          <Button variant="success">이대로 수정</Button>
        </React.Fragment>
      ) : (
        <Button onClick={toggleEditMode} variant="success">
          프로필 수정
        </Button>
      )}
    </div>
  ) : null;

  return (
    <Container className="profile-container">
      {authContext.isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <React.Fragment>
          {profile}
          {verficaion}
          {editButton}
        </React.Fragment>
      )}
    </Container>
  );
};

export default UserProfile;
