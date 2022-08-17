const { Router } = require("express");
const { Diets } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const dietsDb = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto vegetarian",
    "ovo vegetarian",
    "vegan",
    "pescetarian",
    "paleo",
    "primal",
    "low fodmap",
    "whole30",
  ];
  try {
    if (dietsDb) {
      let typesDiet = await Diets.findOrCreate();
      console.log(typesDiet, "estoy aca");
      res.status(200).json(typesDiet);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//

module.exports = router;
