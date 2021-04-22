import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext({
  isAuthenticate: false,
  authWithEmailAndPassword: () => {},
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

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate: isAuth,
        authWithEmailAndPassword: authWithEmailAndPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
