import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

export const getAllRecipes = () => {
  return async function (dispatch) {
    try {
      const apiInfo = await axios.get("http://localhost:3001/api/recipes");
      return dispatch({ type: GET_ALL_RECIPES, payload: apiInfo.data });
    } catch (error) {
      console.log(error);
    }
  };
};
