const { Router } = require("express");
const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const router = Router();
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

// router.delete("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     await Recipe.destroy({
//       where: { id: id },
//     });
//     return res.send("The recipe was deleted");
//   } catch (error) {
//     next(error);
//   }
// });
// router.put("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params,
//       { name, summary, healthScore, steps, image, diets } = req.body,
//       recipeEditada = await Recipe.update(
//         {
//           name,
//           summary,
//           healthScore,
//           steps,
//           image,
//         },
//         {
//           where: {
//             id: id,
//           },
//         },
//         { include: diets }
//       );
//     res.send(recipeEditada);
//   } catch (error) {
//     next(error);
//   }
// });
module.exports = router;
