import { GET_ALL_RECIPES } from "../actions";
import { GET_ALL_DIETS } from "../actions";
import { POST_RECIPES } from "../actions";
import { GET_ID_RECIPE } from "../actions";
import { GET_NAMES_RECIPES } from "../actions";
import { GET_FILTER_DIETS } from "../actions";
import { GET_FILTER_CREATED } from "../actions";
import { GET_SORT_FILTER } from "../actions";
import { GET_HEALTHSCORE_SORT } from "../actions";
let initialState = {
  allRecipes: [],
  recipesFilters: [],
  allDiets: [],
  idRecipe: {},
  namesRecipes: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
        recipesFilters: action.payload,
        idRecipe: {},
      };
    case GET_ALL_DIETS:
      return {
        ...state,
        allDiets: action.payload,
      };
    case POST_RECIPES:
      return {
        ...state,
      };

    case GET_FILTER_DIETS:
      const recipes_All = state.recipesFilters;
      const filtByDiets =
        action.payload === "All Diets"
          ? state.recipesFilters
          : recipes_All.filter((recipe) => {
              console.log(recipe.diets.length);
              if (recipe.diets.length > 0) {
                if (
                  recipe.diets.find(
                    (element) => element.name === action.payload
                  )
                )
                  return recipe;
              }
              if (
                action.payload === "vegetarian" &&
                recipe.hasOwnProperty("vegetarian") &&
                recipe.vegetarian === true
              )
                return recipe;

              if (
                action.payload === "dairyFree" &&
                recipe.hasOwnProperty("dairyFree") &&
                recipe.dairyFree === true
              )
                return recipe;
            });
      return {
        ...state,
        allRecipes: filtByDiets,
      };

    case GET_FILTER_CREATED:
      const dietsCreated =
        action.payload === "Created"
          ? state.recipesFilters.filter((element) => element.createdInDb)
          : state.recipesFilters.filter((element) => !element.createdInDb);
      return {
        ...state,
        allRecipes: dietsCreated,
      };

    case GET_SORT_FILTER:
      let sortArr =
        action.payload === "az"
          ? state.recipesFilters.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : action.payload === "za"
          ? state.recipesFilters.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            })
          : state.allRecipes.sort(function (a, b) {
              if (a.id > b.id) {
                return -1;
              }
              if (b.id > a.id) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allRecipes: sortArr,
      };
    case GET_HEALTHSCORE_SORT:
      let arrHealth =
        action.payload === "up"
          ? state.recipesFilters.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            })
          : action.payload === "down"
          ? state.recipesFilters.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            })
          : state.allRecipes.sort(function (a, b) {
              if (a.id > b.id) {
                return -1;
              }
              if (b.id > a.id) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allRecipes: arrHealth,
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
