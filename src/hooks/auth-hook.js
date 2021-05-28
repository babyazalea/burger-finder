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
  const [sendedVerification, setSendedVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const initializeError = () => {
    setError(null);
  };

  const authWithEmailAndPassword = async (email, password, authMode) => {
    setIsLoading(true);
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url;

    if (authMode === "signup") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    } else if (authMode === "login") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    }

    try {
      const response = await axios.post(url, authData);
      const responseData = await response.data;

      if (authMode === "signup") {
        console.log("signup success");
      } else if (authMode === "login") {
        try {
          const responseDataKeys = Object.keys(responseData);

          for (let key in responseDataKeys) {
            const name = responseDataKeys[key];
            localStorage.setItem(name, responseData[name]);
          }

          const getUserDataUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
          const tokenData = { idToken: responseData["idToken"] };
          const userDataResponse = await axios.post(getUserDataUrl, tokenData);
          const userData = await userDataResponse.data.users[0];

          console.log("login success.");
          setToken(responseData["idToken"]);
          setUserEmail(responseData["email"]);
          setUserId(responseData["localId"]);
          setUserName(responseData["displayName"]);
          setIsVerified(userData["emailVerified"]);
          setIsLoggedIn(true);
        } catch (err) {
          console.log(err);
          setIsLoading(false);
        }
      }
      setIsLoading(false);
      history.push("/");
    } catch (error) {
      const errorResponse = error.response.data;
      setIsLoading(false);
      setError(errorResponse.error.message);
    }
  };

  const signInToFirebase = async () => {
    setIsLoading(true);
    const accessToken = localStorage.getItem("access_token");

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const authData = {
      postBody: `access_token=${accessToken}&providerId=google.com`,
      requestUri: "http://localhost:3000",
      returnIdpCredential: true,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(url, authData);
      const responseData = await response.data;

      const responseDataKeys = Object.keys(responseData);

      for (let key in responseDataKeys) {
        const name = responseDataKeys[key];
        localStorage.setItem(name, responseData[name]);
      }
      setIsLoggedIn(true);
      setToken(responseData["idToken"]);
      setUserEmail(responseData["email"]);
      setUserId(responseData["localId"]);
      setUserName(responseData["displayName"]);
      setIsVerified(true);
      history.push("/");
      setIsLoading(false);
    } catch (err) {
      const errorResponse = error.response.data;
      setIsLoading(false);
      setError(errorResponse.error.message);
    }
  };

  const emailVerification = async () => {
    setIsLoading(true);

    const idToken = localStorage.getItem("idToken");
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    const verifingData = {
      requestType: "VERIFY_EMAIL",
      idToken: idToken,
    };

    try {
      await axios.post(url, verifingData);
      setIsLoading(false);
      setSendedVerification(true);
    } catch (err) {
      const errorResponse = error.response.data;
      setIsLoading(false);
      setError(errorResponse.error.message);
    }
  };

  const updateProfile = async (newUserName) => {
    setIsLoading(true);

    const dataForUpdate = {
      idToken: token,
      displayName: newUserName,
      photoUrl: "",
      deleteAttribute: ["PHOTO_URL"],
      returnSecureToken: true,
    };

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    try {
      const response = await axios.post(url, dataForUpdate);
      const responseData = await response.data;
      const responseDataKeys = Object.keys(responseData);

      for (let key in responseDataKeys) {
        const name = responseDataKeys[key];
        localStorage.setItem(name, responseData[name]);
      }

      setUserName(responseData["displayName"]);
      setIsLoading(false);
      history.push("/");
    } catch (err) {
      const errorResponse = error.response.data;
      setIsLoading(false);
      setError(errorResponse.error.message);
    }
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
    sendedVerification,
    isVerified,
    initializeError,
    authWithEmailAndPassword,
    signInToFirebase,
    emailVerification,
    updateProfile,
    sendPasswordReset,
    logout,
  };
};
