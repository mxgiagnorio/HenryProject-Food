const { Router } = require("express");
const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const router = Router();
// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     let info = await getDbInfo();
//     if (id) {
//       let pokemon = info.find((pokemon) => pokemon.id == id);
//       pokemon
//         ? res.status(200).send(pokemon)
//         : res.status(404).send("No esta el detalle del pokemon");
//     }
//   } catch (error) {
//     console.log("ERROR EN RUTA GET A /POKEMON POR ID", error);
//   }
// });
router.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;
  try {
    if (idRecipe.length > 9) {
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
        diets: searchIdInApi.data.diets,
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
