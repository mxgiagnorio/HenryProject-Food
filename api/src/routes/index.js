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
//434e56a0b8574a8495f6a862bb2d1e92
//3cccbfee8e9541fea3d985cf5edd2bb5
//bff6dddeea3c460f8cee7bce0d275283
//112ba4692f59408f93566348c7984cd3
//45baac6a3f934514b1a3f17ec6b4defc
//90b2bd147a134c999be1d135f05bc0c7
