import { useState } from "react";
import { useHistory } from "react-router";

import { storingData } from "../utils/storing-data";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const history = useHistory();

  const login = (loginData, userData) => {
    storingData(loginData);

    setToken(loginData["idToken"]);
    setUserName(loginData["displayName"]);
    setUserEmail(loginData["email"]);
    setPhotoUrl(loginData["photoUrl"]);
    setUserId(loginData["localId"]);
    setIsVerified(userData["emailVerified"]);
    setIsLoggedIn(true);

    history.push("/");
  };

  const googleLogin = (responseData) => {
    storingData(responseData);

    setToken(responseData["idToken"]);
    setUserName(responseData["displayName"]);
    setUserEmail(responseData["email"]);
    setPhotoUrl(responseData["photoUrl"]);
    setUserId(responseData["localId"]);
    setIsVerified(true);
    setIsLoggedIn(true);

    history.push("/");
  };

  const updateProfile = (responseData) => {
    storingData(responseData);

    setUserName(responseData["displayName"]);
    setUserId(responseData["localId"]);

    history.push("/");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsVerified(false);
    localStorage.clear();
    history.push("/");
  };

  return {
    token,
    userName,
    userEmail,
    userId,
    photoUrl,
    isLoggedIn,
    isVerified,
    login,
    googleLogin,
    updateProfile,
    logout,
  };
};
