import { useState } from "react";
import { useHistory } from "react-router";

import axios from "axios";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);

  const history = useHistory();

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
      if (response.status === 200 && authMode === "signup") {
        console.log("signup success");
      } else if (response.status === 200 && authMode === "login") {
        console.log("login success.");
        setIsAuth(true);
      }
      setIsLoading(false);
      history.push("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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

      if (responseData) {
        setIsAuth(true);
        setUserId(responseData["localId"]);
        setUserName(responseData["fullName"]);
        history.push("/");
      }

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      throw err;
    }
  };

  const logout = () => {
    setIsAuth(false);
    setUserId(null);
    setUserName(null);
    localStorage.clear();
    history.push("/");
  };

  return {
    isLoading,
    isAuth,
    userId,
    userName,
    authWithEmailAndPassword,
    signInToFirebase,
    logout,
  };
};
