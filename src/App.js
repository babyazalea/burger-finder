import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthContextProvider from "./context/auth-context";
import BurgerContextProvider from "./context/burger-context";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";
import Burger from "./components/Burger/Burger";
import BurgerAnalyzer from "./components/Burger/BurgerAnalyzer/BurgerAnalyzer";
import AuthWithGoogle from "./components/Auth/AuthWithGoogle/AuthWithGoogle";
import UserProfile from "./components/Auth/UserProfile/UserProfile";

function App() {
  let routes = (
    <Switch>
      <AuthContextProvider>
        <BurgerContextProvider>
          <Route path="/" component={Burger} exact />
          <Route path="/analyze" component={BurgerAnalyzer} exact />
          <Route path="/burger-maker" component={Burger} exact />
          <Route path="/users/:id" component={UserProfile} />
          <Route path="/auth" component={Auth} exact />
          <Route path="/auth/google/" component={AuthWithGoogle} />
        </BurgerContextProvider>
      </AuthContextProvider>
    </Switch>
  );

  return (
    <div className="App" id="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
