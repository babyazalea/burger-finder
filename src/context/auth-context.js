import React, { useState } from "react";
import axios from "axios";

import { getCookie, setCookie } from "../utils/cookie";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  authWithEmailAndPassword: () => {},
  signInToFirebase: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const authWithEmailAndPassword = async (email, password, authMode) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  const signInToFirebase = async () => {
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
      setIsAuth(true);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        authWithEmailAndPassword: authWithEmailAndPassword,
        signInToFirebase: signInToFirebase,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
