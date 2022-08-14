const { Router } = require("express");
const { Diets } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let typesDiet = await Diets.findAll();
    console.log(typesDiet, "estoy aca");
    res.status(200).json(typesDiet);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.get("/"), async(req,res =>{
// const dietsDb = [
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
//     dietsDb.forEach((diet) => {
//       if (diet !== undefined) {
//         Diets.findCreateFind({
//           where: { name: diet },
//         });
//       }
//     });
//     const allDiets = await Diets.findAll();
//     res.send(allDiets);
//   } catch (error) {
//     res.status(400).send("Type of diet NOT FOUND");
//   }
// });

module.exports = router;
