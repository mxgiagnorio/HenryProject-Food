import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const POST_RECIPES = "POST_RECIPES";
export const GET_ID_RECIPE = "GET_ID_RECIPE";
export const GET_NAMES_RECIPES = "GET_NAME_RECIPES";
export const GET_FILTER_DIETS = "GET_FILTER_DIETS";
export const GET_FILTER_CREATED = "GET_FILTER_CREATED";
export const GET_SORT_FILTER = "GET_SORT_FILTER";
export const GET_HEALTHSCORE_SORT = "GET_HEALTHSCORE_SORT";

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
export const getAllDiets = () => {
  return async function (dispatch) {
    try {
      const info = await axios.get("http://localhost:3001/api/diets");
      console.log(info);
      return dispatch({ type: GET_ALL_DIETS, payload: info.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postRecipe = (payload) => {
  return async function (dispatch) {
    try {
      const Info = await axios.post(
        "http://localhost:3001/api/recipes",
        payload
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterbyDiets = (payload) => {
  return {
    type: GET_FILTER_DIETS,
    payload,
  };
};
export const sortByHealthScore = (payload) => {
  return {
    type: GET_HEALTHSCORE_SORT,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: GET_FILTER_CREATED,
    payload,
  };
};
export const sortFilter = (payload) => {
  return {
    type: GET_SORT_FILTER,
    payload,
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
