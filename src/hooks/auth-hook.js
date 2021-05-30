import { useState } from "react";
import { useHistory } from "react-router";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const history = useHistory();

  const login = (loginData, userData) => {
    const loginDataKeys = Object.keys(loginData);

    for (let key in loginDataKeys) {
      const name = loginDataKeys[key];
      localStorage.setItem(name, loginData[name]);
    }

    setIsVerified(userData["emailVerified"]);
    setIsLoggedIn(true);

    history.push("/");
  };

  const googleLogin = (responseData) => {
    const responseDataKeys = Object.keys(responseData);

    for (let key in responseDataKeys) {
      const name = responseDataKeys[key];
      localStorage.setItem(name, responseData[name]);
    }

    setIsVerified(true);
    setIsLoggedIn(true);

    history.push("/");
  };

  const updateProfile = (responseData) => {
    const responseDataKeys = Object.keys(responseData);

    for (let key in responseDataKeys) {
      const name = responseDataKeys[key];
      localStorage.setItem(name, responseData[name]);
    }

    history.push("/");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsVerified(false);
    localStorage.clear();
    history.push("/");
  };

  return {
    isLoggedIn,
    isVerified,
    login,
    googleLogin,
    updateProfile,
    logout,
  };
};
