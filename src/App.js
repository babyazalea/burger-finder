import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import BurgerContextProvider from "./context/burger-context";

import Layout from "./components/Layout/Layout";
import Burger from "./components/Burger/Burger";
import BurgerAnalyzer from "./components/Burger/BurgerAnalyzer/BurgerAnalyzer";
import Auth from "./components/Auth/Auth";
import AuthWithGoogle from "./components/Auth/AuthWithGoogle/AuthWithGoogle";
import UserProfile from "./components/User/UserProfile/UserProfile";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {
    isLoading,
    signUpMode,
    isAuth,
    token,
    userId,
    userName,
    sendedVerification,
    isVerified,
    initializeAuthMode,
    changeToSignUp,
    authWithEmailAndPassword,
    signInToFirebase,
    emailVerification,
    logout,
  } = useAuth();

  let routes = (
    <Switch>
      <Route path="/" component={Burger} exact />
      <Route path="/analyze" component={BurgerAnalyzer} exact />
      <Route path="/burger-maker" component={Burger} exact />
      <Route path="/users/:id" component={UserProfile} />
      <Route path="/auth" component={Auth} exact />
      <Route path="/auth/google/" component={AuthWithGoogle} />
    </Switch>
  );

  return (
    <div className="App" id="App">
      <AuthContext.Provider
        value={{
          isLoading: isLoading,
          signUpMode: signUpMode,
          isLoggedIn: isAuth,
          token: token,
          userId: userId,
          userName: userName,
          sendedVerification: sendedVerification,
          isVerified: isVerified,
          initializeAuthMode: initializeAuthMode,
          changeToSignUp: changeToSignUp,
          authWithEmailAndPassword: authWithEmailAndPassword,
          signInToFirebase: signInToFirebase,
          emailVerification: emailVerification,
          logout: logout,
        }}
      >
        <BurgerContextProvider>
          <Layout>{routes}</Layout>
        </BurgerContextProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
