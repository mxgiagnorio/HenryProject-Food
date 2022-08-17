const { Router } = require("express");
const recipesRoute = require("./recipes");
const recipeRoute = require("./recipe");
const dietsRoute = require("./diets");

const router = Router();

router.use("/recipes", recipesRoute);
router.use("/recipe", recipeRoute);
router.use("/diets", dietsRoute);

module.exports = router;
