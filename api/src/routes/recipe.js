const { Router } = require("express");
const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const router = Router();

router.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;
  try {
    if (idRecipe.length > 8) {
      let searchByPk = await Recipe.findByPk(idRecipe, { include: [Diets] });
      return res.status(200).send(searchByPk);
    } else {
      const searchIdInApi = await axios.get(
        `https://api.spoonacular.com/recipes/${idRecipe}/information?&apiKey=${API_KEY}`
      );
      const response = {
        id: searchIdInApi.data.id,
        name: searchIdInApi.data.title,
        image: searchIdInApi.data.image,
        healthScore: searchIdInApi.data.healthScore,
        summary: searchIdInApi.data.summary,
        types: searchIdInApi.data.dishTypes.join("-"),
        diets: searchIdInApi.data.diets?.map((el) => el),
        steps:
          searchIdInApi.data.analyzedInstructions[0] &&
          searchIdInApi.data.analyzedInstructions[0].steps
            ? searchIdInApi.data.analyzedInstructions[0].steps
                .map((item) => item.step)
                .join(" ")
            : "",
      };
      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
