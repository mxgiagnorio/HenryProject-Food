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
// bab1f441a7f64466835506ed313027b4
//c79adff9a0c44889b86138f3cafdd937
