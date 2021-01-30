import BurgerMaker from "./components/BurgerMaker/BurgerMaker";
import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";

function App() {
  let routes = (
    <Switch>
      <Route path="/" component={BurgerMaker} />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
