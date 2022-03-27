import "./App.css";

import Navigation from "./layout/Navigation";

import About from "./pages/About";
import TransactionTracker from "./pages/TransactionTracker";

function App() {
  return (
    <div>
      <Navigation />
     <TransactionTracker />
    </div>
  );
}

export default App;
