import { useState } from "react";
import { useHistory } from "react-router";

import axios from "axios";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const initializeError = () => {
    setError(null);
  };

  const login = (loginData, userData) => {
    setToken(loginData["idToken"]);
    setUserEmail(loginData["email"]);
    setUserId(loginData["localId"]);
    setUserName(loginData["displayName"]);
    setIsVerified(userData["emailVerified"]);
    setIsLoggedIn(true);

    const loginDataKeys = Object.keys(loginData);

    for (let key in loginDataKeys) {
      const name = loginDataKeys[key];
      localStorage.setItem(name, loginData[name]);
    }

    history.push("/");
  };

  const googleLogin = (responseData) => {
    setToken(responseData["idToken"]);
    setUserEmail(responseData["email"]);
    setUserId(responseData["localId"]);
    setUserName(responseData["displayName"]);
    setIsVerified(true);
    setIsLoggedIn(true);

    const responseDataKeys = Object.keys(responseData);

    for (let key in responseDataKeys) {
      const name = responseDataKeys[key];
      localStorage.setItem(name, responseData[name]);
    }
    history.push("/");
  };

  const updateProfile = (responseData) => {
    const responseDataKeys = Object.keys(responseData);

    for (let key in responseDataKeys) {
      const name = responseDataKeys[key];
      localStorage.setItem(name, responseData[name]);
    }

    setUserName(responseData["displayName"]);
    history.push("/");
  };

  const sendPasswordReset = async () => {
    setIsLoading(true);

    const data = {
      requestType: "PASSWORD_RESET",
      email: userEmail,
    };

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    try {
      const response = await axios.post(url, data);
      console.log(response);
      setIsLoading(false);
    } catch (err) {
      const errorResponse = error.response.data;
      setIsLoading(false);
      setError(errorResponse.error.message);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserName(null);
    setIsVerified(false);
    localStorage.clear();
    history.push("/");
  };

  return {
    isLoading,
    isLoggedIn,
    error,
    token,
    userId,
    userName,
    isVerified,
    initializeError,
    login,
    googleLogin,
    updateProfile,
    sendPasswordReset,
    logout,
  };
};
