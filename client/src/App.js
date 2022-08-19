import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import Home from "./components/views/Home";
import RecipeDetails from "./components/recipes/RecipeDetails";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route exact path={"/recipe/:id"} component={RecipeDetails} />
    </div>
  );
}

export default App;
