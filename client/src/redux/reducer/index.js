import { GET_ALL_RECIPES } from "../actions";
import { GET_ID_RECIPE } from "../actions";
import { GET_NAMES_RECIPES } from "../actions";

let initialState = {
  allRecipes: [],
  idRecipe: [],
  namesRecipes: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
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
