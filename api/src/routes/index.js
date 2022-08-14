const { Router } = require("express");
const recipesRoute = require("./recipes");
const recipeRoute = require("./recipe");
const dietsRoute = require("./diets");

const router = Router();

router.use("/recipes", recipesRoute);
router.use("/recipe", recipeRoute);
router.use("/diets", dietsRoute);

module.exports = router;

// const getApiInfo = async () => {
//     const URL = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
//     );
//     const response = await URL.data.results.map((receta) => {
//       return {
//         id: receta.id,
//         title: receta.title,
//         image: receta.image,
//         healthScore: receta.healthScore,
//         summary: receta.summary,

//       };
//     });
//     return response;
//   };
