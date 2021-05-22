import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import BurgerContextProvider from "./context/burger-context";

import Layout from "./components/Layout/Layout";
import Burger from "./components/Burger/Burger";
import BurgerAnalyzer from "./components/Burger/BurgerAnalyzer/BurgerAnalyzer";
import Auth from "./components/Auth/Auth";
import SignUp from "./components/Auth/SignUp/SignUp";
import AuthWithGoogle from "./components/Auth/AuthWithGoogle/AuthWithGoogle";
import UserProfile from "./components/User/UserProfile/UserProfile";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {
    isLoading,
    isAuth,
    userId,
    userName,
    isVerified,
    authWithEmailAndPassword,
    signInToFirebase,
    logout,
  } = useAuth();

  let routes = (
    <Switch>
      <Route path="/" component={Burger} exact />
      <Route path="/analyze" component={BurgerAnalyzer} exact />
      <Route path="/burger-maker" component={Burger} exact />
      <Route path="/users/:id" component={UserProfile} />
      <Route path="/auth" component={Auth} exact />
      <Route path="/auth/signup" component={SignUp} exact />
      <Route path="/auth/google/" component={AuthWithGoogle} />
    </Switch>
  );

  return (
    <div className="App" id="App">
      <AuthContext.Provider
        value={{
          isLoading: isLoading,
          isLoggedIn: isAuth,
          userId: userId,
          userName: userName,
          isVerified: isVerified,
          authWithEmailAndPassword: authWithEmailAndPassword,
          signInToFirebase: signInToFirebase,
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
