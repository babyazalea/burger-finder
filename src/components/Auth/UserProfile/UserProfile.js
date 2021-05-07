import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { AuthContext } from "../../../context/auth-context";

import "./UserProfile.css";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    email: "",
    userName: "",
    photoUrl: "",
  });
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isAuthenticated) {
      setUserProfile({
        email: localStorage.getItem("email"),
        userName: localStorage.getItem("fullName"),
        photoUrl: localStorage.getItem("photoUrl"),
      });
    }
  }, []);

  let profile = (
    <div className="user-profile">
      <p className="user-image">
        <img src={userProfile.photoUrl} alt="profile" />
      </p>
      <p className="user-email">{userProfile.email}</p>
      <p className="user-name">{userProfile.userName}</p>
    </div>
  );

  const profileLoadFailed = (
    <div className="error-message-box">
      <p>프로필을 불러오지 못했습니다.</p>)
    </div>
  );

  return (
    <Container className="profile-container">
      {userProfile ? profile : profileLoadFailed}
    </Container>
  );
};

export default UserProfile;
