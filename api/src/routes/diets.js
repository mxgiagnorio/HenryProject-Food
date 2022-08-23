const { Router } = require("express");
const axios = require("axios");
const { API_KEY } = process.env;
const { Diets } = require("../db");
const router = Router();

// router.get("/", async (req, res) => {
//   const dietsDb = [
//     "gluten free",
//     "ketogenic",
//     "vegetarian",
//     "lacto vegetarian",
//     "ovo vegetarian",
//     "vegan",
//     "pescetarian",
//     "paleo",
//     "primal",
//     "low fodmap",
//     "whole30",
//   ];
//   try {
//     if (dietsDb) {
//       let typesDiet = await Diets.findOrCreate();
//       console.log(typesDiet, "estoy aca");
//       res.status(200).json(typesDiet);
//     }
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.get("/", async (req, res) => {
//   const URL = await axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
//   );
//   const diets = await URL.data.results?.map((e) => e.diets).flat();

//   diets.forEach((e) => {
//     Diets.findOrCreate({
//       where: { name: e },
//     });
//   });
//   if (diets.length) {
//     res.status(200).send(diets);
//   } else {
//     res.status(404).send("Diet not found");
//   }
// });
router.get("/", async (req, res) => {
  const apiInfo = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true
    `
  );
  const apiDiets = await apiInfo.data.results.map((d) => d.diets);

  const dietArr = [];
  apiDiets.map((element) => {
    for (let i = 0; i < element.length; i++) {
      dietArr.push(element[i]);
    }
  });

  dietArr.forEach((f) => {
    Diets.findOrCreate({ where: { name: f } });
  });

  const allDiets = await Diets.findAll();
  if (allDiets.length) {
    res.status(200).send(allDiets);
  } else {
    res.status(404).send("Diet not found");
  }
});
module.exports = router;
