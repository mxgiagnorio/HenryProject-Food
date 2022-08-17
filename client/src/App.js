import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import Home from "./components/views/Home";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
