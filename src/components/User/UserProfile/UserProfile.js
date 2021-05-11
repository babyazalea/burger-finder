import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { AuthContext } from "../../../context/auth-context";

import "./UserProfile.css";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState();

  const authContext = useContext(AuthContext);

  useEffect(() => {
    setUserProfile({
      email: localStorage.getItem("email"),
      userName:
        localStorage.getItem("displayName") !== ""
          ? localStorage.getItem("displayName")
          : "이름 없음",
      photoUrl: localStorage.getItem("photoUrl")
        ? localStorage.getItem("photoUrl")
        : null,
    });
  }, []);

  let profile;
  if (userProfile) {
    profile = (
      <div className="user-profile">
        <div className="user-image">
          {userProfile.photoUrl !== null ? (
            <img src={userProfile.photoUrl} alt="profile" />
          ) : (
            <span>
              <FontAwesomeIcon icon="user-circle" />
            </span>
          )}
        </div>
        <p className="user-email">{userProfile.email}</p>
        <p className="user-name">{userProfile.userName}</p>
      </div>
    );
  } else {
    profile = (
      <div className="error-message-box">
        <p>프로필을 불러오지 못했습니다.</p>)
      </div>
    );
  }

  return (
    <Container className="profile-container">
      {authContext.isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        profile
      )}
    </Container>
  );
};

export default UserProfile;
