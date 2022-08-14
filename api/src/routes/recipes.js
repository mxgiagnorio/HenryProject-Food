const { Router } = require("express");
const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const { Op } = require("sequelize");

const router = Router();

// const getApiInfo = async () => {
//   try {
//     const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
//     const result = await axios.get(apiUrl);
//     result.data?.results.map((e) => {
//       return {
//         id: e.id,
//         title: e.title,
//         summary: e.summary,
//         image: e.image,
//         score: e.spoonacularScore,
//         healthScore: e.healthScore,
//         steps:
//           e.analyzedInstructions[0] && e.analyzedInstructions[0].steps
//             ? e.analyzedInstructions[0].steps
//                 .map((item) => item.step)
//                 .join(" \n")
//             : "",
//       };
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

const getApiInfo = async () => {
  const URL = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const response = await URL.data.results.map((el) => {
    return {
      id: el.id,
      name: el.title,
      image: el.image,
      healthScore: el.healthScore,
      summary: el.summary,
      steps:
        el.analyzedInstructions[0] && el.analyzedInstructions[0].steps
          ? el.analyzedInstructions[0].steps
              .map((item) => item.step)
              .join(" \n")
          : "",
    };
  });
  return response;
};

// const getApiInfo = async () => {
//   const recipes = [];
//   const URL = await axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
//   );
//   URL.data.results.map((el) => {
//     recipes.push({
//       id: el.id,
//       title: el.title,
//       image: el.image,
//       score: el.spoonacularScore,
//       healthScore: el.healthScore,
//       summary: el.summary,
//       steps:
//         el.analyzedInstructions[0] && el.analyzedInstructions[0].steps
//           ? el.analyzedInstructions[0].steps
//               .map((item) => item.step)
//               .join(" \n")
//           : "",
//     });
//   });

//   return recipes;
// };

const getDbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diets,
      attributes: ["name"], //Entro al model y me traigo el name, el id ya me lo genera solo
      through: {
        //esto es una comprobacion que se hace cuando quiero traerme un atributo.
        attributes: [],
      },
    },
  });
};

const allApiRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dBinfo = await getDbInfo();
  if (allApiRecipes) {
    const allData = apiInfo.concat(dBinfo);
    return allData;
  } else return apiInfo;
};

// router.get("/", async (req, res) => {
//   const foodInfo = await getApiInfo();
//   foodInfo.length
//     ? res.status(200).send(foodInfo)
//     : res.status(404).send("no se encontro la info");
// });

router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const recipeByName = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API_KEY}`
    );

    let getByNameApi = recipeByName.data.results.map((el) => {
      return {
        id: el.id,
        name: el.title,
        image: el.image,
        healthScore: el.healthScore,
        summary: el.summary,
        steps:
          el.analyzedInstructions[0] && el.analyzedInstructions[0].steps
            ? el.analyzedInstructions[0].steps
                .map((item) => item.step)
                .join(" \n")
            : "",
      };
    });
    let getByNameDb = await Recipe.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
      include: Diets,
    });
    let concat = getByNameDb.concat(getByNameApi).slice(0, 9);

    if (concat.length) {
      res.status(200).send(concat);
    } else {
      res.status(404).send("No se encontro la receta que buscabas");
    }
  } else {
    const getAllRecipes = await allApiRecipes();
    res.send(getAllRecipes);
  }
});

router.post("/", async (req, res, next) => {
  const { name, image, healthScore, summary, steps, diets } = req.body;
  try {
    //creamos la nueva receta con los atributos especificados por body
    const recipeCreate = await Recipe.create({
      name,
      image,
      healthScore,
      summary,
      steps,
    });
    //buscamos el tipo de dieta en la tabla de DB Diets que coincidan con el nombre especificado
    const dietsDb = await Diets.findAll({
      where: { name: diets },
    });
    //le agregamos el genero a la nueva receta
    recipeCreate.addDiets(dietsDb);
    res.json(recipeCreate);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
