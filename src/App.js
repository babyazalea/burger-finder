import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import BurgerContextProvider from "./context/burger-context";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";
import Burger from "./components/Burger/Burger";
import BurgerAnalyzer from "./components/Burger/BurgerAnalyzer/BurgerAnalyzer";
import AuthWithGoogle from "./components/Auth/AuthWithGoogle/AuthWithGoogle";
import UserProfile from "./components/Auth/UserProfile/UserProfile";
import { useAuth } from "./hooks/auth-hook";

function App() {
  const {
    isAuth,
    userId,
    userName,
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
      <Route path="/auth/google/" component={AuthWithGoogle} />
    </Switch>
  );

  return (
    <div className="App" id="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isAuth,
          userId: userId,
          userName: userName,
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
