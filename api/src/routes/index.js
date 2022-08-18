const { Router } = require("express");
const recipesRoute = require("./recipes");
const recipeRoute = require("./recipe");
const dietsRoute = require("./diets");

const router = Router();

router.use("/recipes", recipesRoute);
router.use("/recipe", recipeRoute);
router.use("/diets", dietsRoute);

module.exports = router;

//e9f13764a75a41808a7c5c28164293e1
//fac45293539e446fae04fbf20aea22bc
