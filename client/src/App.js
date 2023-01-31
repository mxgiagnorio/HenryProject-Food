import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import Home from "./components/views/Home";
import RecipeDetails from "./components/recipes/RecipeDetails";
import CreateRecipe from "./components/create/CreateRecipe";
import axios from "axios";
axios.defaults.baseURL = "https://henryproject-food-production.up.railway.app";
function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route exact path={"/recipe/:id"} component={RecipeDetails} />
      <Route path="/recipes" component={CreateRecipe} />
    </div>
  );
}

export default App;
