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
//3a9ca3c6079143bbb12f7cef62bcec10
//2062734271b248e69cd0610dcde32191
//e5ca05cf684345f496320a4f344ae82a
