import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import BurgerContextProvider from "./context/burger-context";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import Burger from "./components/Burger/Burger";
import BurgerAnalyzer from "./components/Burger/BurgerAnalyzer/BurgerAnalyzer";

function App() {
  let routes = (
    <Switch>
      <BurgerContextProvider>
        <Route path="/analyze" component={BurgerAnalyzer} exact />
        <Route path="/burger-maker" component={Burger} exact />
        <Route path="/" component={Burger} exact />
      </BurgerContextProvider>
    </Switch>
  );

  return (
    <div className="App" id="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
