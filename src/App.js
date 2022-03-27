import "./App.css";

import Navigation from "./layout/Navigation";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import TransactionTracker from "./pages/TransactionTracker";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact={true}>
          <About />
        </Route>
        <Route path="/TransactionTracker">
          <TransactionTracker />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </div>
  );
}

export default App;
