import { GET_ALL_RECIPES } from "../actions";
import { GET_ID_RECIPE } from "../actions";
import { GET_NAMES_RECIPES } from "../actions";
import { GET_FILTER_DIETS } from "../actions";

let initialState = {
  allRecipes: [],
  recipesFilters: [],
  idRecipe: [],
  namesRecipes: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
        recipesFilters: action.payload,
      };
    case GET_FILTER_DIETS:
      const infoRecipes = state.recipesFilters;
      const dietsFiltered =
        action.payload === "All diets"
          ? infoRecipes
          : infoRecipes.filter((element) => element.diets === action.payload);
      return {
        ...state,
        allRecipes: dietsFiltered,
      };
    case GET_ID_RECIPE:
      return {
        ...state,
        idRecipe: action.payload,
      };
    case GET_NAMES_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
      };

    default:
      return state;
  }
}
export default rootReducer;
