import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ID_RECIPE = "GET_ID_RECIPE";
export const GET_NAMES_RECIPES = "GET_NAME_RECIPES";

export const getAllRecipes = () => {
  return async function (dispatch) {
    try {
      const Info = await axios.get("http://localhost:3001/api/recipes");
      return dispatch({ type: GET_ALL_RECIPES, payload: Info.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getIdRecipe = (id) => {
  return async function (dispatch) {
    try {
      const Info = await axios.get(`http://localhost:3001/api/recipe/${id}`);
      return dispatch({ type: GET_ID_RECIPE, payload: Info.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRecipesNames = (name) => {
  return async function (dispatch) {
    try {
      const info = await axios.get(
        `http://localhost:3001/api/recipes?name=${name}`
      );
      return dispatch({ type: GET_NAMES_RECIPES, payload: info.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// export function getIdRecipe(id) {
//   return async (dispatch) => {
//     await axios
//       .get(`http://localhost:3001/api/recipe/${id}`)
//       .then((result) => {
//         return dispatch({
//           type: GET_ID_RECIPE,
//           payload: result.data,
//         });
//       })
//       .catch((Error) => console.log(Error));
//   };
// }
