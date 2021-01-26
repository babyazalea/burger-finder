import BurgerMaker from "./components/BurgerMaker/BurgerMaker";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={BurgerMaker} />
      </Switch>
    </div>
  );
}

export default App;
