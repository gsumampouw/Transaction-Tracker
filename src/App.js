import "./App.css";
import Footer from "./layout/Footer";

import Navigation from "./layout/Navigation";
import TransactionTracker from "./pages/TransactionTracker";

function App() {
  return (
    <div>
      <Navigation />
     <TransactionTracker />
     <Footer/>
    </div>
  );
}

export default App;
