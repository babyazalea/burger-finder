import React, { useState } from "react";
import axios from "axios";

import { setCookie } from "../utils/cookie";

export const AuthContext = React.createContext({
  isAuthenticate: false,
  authWithEmailAndPassword: () => {},
  signInWithGoogle: () => {},
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

  const signInWithGoogle = async (callback) => {
    const accessToken = document.cookie.split(";")[0].split("=")[1];

    const authData = {
      postBody: `access_token=${accessToken}&providerId=google.com`,
      requestUri: "http://localhost:3000",
      returnIdpCredential: true,
      returnSecureToken: true,
    };

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        const authData = response.data;
        const authDataKeys = Object.keys(authData);

        const expiresInTime = authData["expiresIn"];

        for (let key in authDataKeys) {
          const name = authDataKeys[key];
          setCookie(name, authData[name], {
            secure: true,
            "max-age": expiresInTime,
          });
        }

        callback();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate: isAuth,
        authWithEmailAndPassword: authWithEmailAndPassword,
        signInWithGoogle: signInWithGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
