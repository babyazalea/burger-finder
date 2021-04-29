import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { AuthContext } from "../../../context/auth-context";

import "./UserProfile.css";

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isAuthenticate) {
      authContext.getUserProfile();
      setIsLoggedIn(true);
    }
  }, [authContext]);

  let profile = (
    <div className="user-profile">
      <p className="user-image">
        <img src={authContext.user.photoUrl} alt="profile" />
      </p>
      <p className="user-email">{authContext.user.email}</p>
      <p className="user-name">{authContext.user.name}</p>
    </div>
  );

  const profileLoadFailed = (
    <div className="error-message-box">
      <p>프로필을 불러오지 못했습니다.</p>)
    </div>
  );

  return (
    <Container className="profile-container">
      {isLoggedIn ? profile : profileLoadFailed}
    </Container>
  );
};

export default UserProfile;
