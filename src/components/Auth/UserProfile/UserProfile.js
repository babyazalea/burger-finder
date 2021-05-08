import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "./UserProfile.css";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    setUserProfile({
      email: localStorage.getItem("email"),
      userName: localStorage.getItem("fullName"),
      photoUrl: localStorage.getItem("photoUrl"),
    });
  }, []);

  let profile;
  if (userProfile) {
    profile = (
      <div className="user-profile">
        <p className="user-image">
          <img src={userProfile.photoUrl} alt="profile" />
        </p>
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

  return <Container className="profile-container">{profile}</Container>;
};

export default UserProfile;
