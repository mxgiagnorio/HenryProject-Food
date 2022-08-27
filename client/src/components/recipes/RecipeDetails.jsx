import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { getIdRecipe } from "../../redux/actions";

export default function RecipeDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.idRecipe);
  //   const [loading = true, setLoading] = useState();
  useEffect(() => {
    dispatch(getIdRecipe(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/home">
        <button>volver al home</button>
      </Link>
      <br></br>
      <img src={detail.image} alt="imagen" />
      <div>
        <h4>{detail.name}</h4>
        <h4>
          Resumen:{detail.summary && detail.summary.replace(/<[^>]+>/g, "")}
        </h4>
        <h4>Puntaje Saludable: {detail.healthScore}</h4>
        <span>diet types:</span> {detail.diets?.map((d) => d.name).join(",")}
        <div>
          <span className="thick"></span>
          {detail.types}
        </div>
        <div>
          <span className="thick">Paso a paso: </span>
          {detail.steps}
        </div>
      </div>
    </div>
  );
}

//   setTimeout(() => {
//     setLoading(false);
//   }, 900);

//   return loading ? (
//     <h1>..cargando</h1>
//   return (
//     <div>
//       <h1>{idRecipe[0].name}</h1>
//       <img src={idRecipe[0].image} />
//     </div>
//   );
// }

{
  /* {idRecipe && idRecipe.diets ? (
        <div>
          <img src={idRecipe.image} alt="Not found " />

          <h2>Name : {idRecipe.name}</h2>
          {/* <p>
            {" "}
            Dish Types:
            {idRecipe.dishTypes?.map((element) => element)}
          </p> */
}
//           <p>
//             {" "}
//             Diets:
//             {idRecipe.diets?.map((element) => element).join(",")}
//           </p>

//           <p>Summary:{idRecipe.summary}</p>

//           <p>Health Score: {idRecipe.healthScore}</p>

//           <p>
//             Steps:{" "}
//             {idRecipe.analyzedInstructions.steps
//               ?.map((element) => element)
//               .join("|")}
//           </p>
//         </div>
//       ) : (
//         <h1>cargando....</h1>
//       )}
//     </div> */}
//   );
// }

// steps:
// el.analyzedInstructions[0] && el.analyzedInstructions[0].steps
//   ? el.analyzedInstructions[0].steps
//       .map((item) => item.step)
//       .join(" \n")
//   : "",
