const { Router } = require("express");
const axios = require("axios");
const { API_KEY } = process.env;
const { Diets } = require("../db");
const router = Router();

const getDiets = async () => {
  try {
    const findDiets = await Diets.findAll();
    if (findDiets.length) {
      return findDiets;
    }
    const diets = [
      "gluten free" + " ",
      "paleolithic" + " ",
      "ketogenic" + " ",
      "lacto ovo vegetarian" + " ",
      "vegan" + " ",
      "pescatarian" + " ",
      "primal" + " ",
      "fodmap friendly" + " ",
      "whole 30" + " ",
    ];
    diets.forEach((e) => {
      Diets.findOrCreate({
        where: { name: e },
      });
    });
    return await Diets.findAll();
  } catch (error) {
    console.log(error);
  }
};

router.get("/", async (req, res) => {
  try {
    let typesDiet = await getDiets();
    // console.log(typesDiet);
    res.status(200).json(typesDiet);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
