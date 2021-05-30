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
import ResetPassword from "./components/User/UserProfile/ResetPassword/ResetPassword";
import Signup from "./components/Auth/Signup/Signup";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {
    token,
    userName,
    userEmail,
    userId,
    photoUrl,
    isLoggedIn,
    isVerified,
    login,
    googleLogin,
    updateProfile,
    logout,
  } = useAuth();

  let routes = (
    <Switch>
      <Route path="/" component={Burger} exact />
      <Route path="/analyze" component={BurgerAnalyzer} exact />
      <Route path="/burger-maker" component={Burger} exact />
      <Route path="/users/:id/reset-password" component={ResetPassword} />
      <Route path="/users/:id">
        <UserProfile
          token={token}
          userName={userName}
          userEmail={userEmail}
          photoUrl={photoUrl}
        />
      </Route>
      <Route path="/auth" component={Auth} exact />
      <Route path="/auth/signup" component={Signup} exact />
      <Route path="/auth/google" component={AuthWithGoogle} />
    </Switch>
  );

  return (
    <div className="App" id="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          isVerified: isVerified,
          login: login,
          googleLogin,
          updateProfile: updateProfile,
          logout: logout,
        }}
      >
        <BurgerContextProvider>
          <Layout userName={userName} userId={userId}>
            {routes}
          </Layout>
        </BurgerContextProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
