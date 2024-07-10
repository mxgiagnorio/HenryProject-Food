import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { getIdRecipe } from "../../redux/actions";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const detail = useSelector((state) => state.idRecipe);
  //   const [loading = true, setLoading] = useState();
  useEffect(() => {
    dispatch(getIdRecipe(params.id));
    // return () => getIdRecipe();
  }, [dispatch, params.id]);

  return (
    <div className="detailContainer">
      <div className="links">
        <Link to="/home">
          <button className="back">Back to home</button>
        </Link>
        <Link to="/recipes">
          <button className="createRecipe">Create your recipe!</button>
        </Link>
      </div>
      <br></br>
      <img className="detailImage" src={detail.image} alt="imagen" />
      <div className="detailCard">
        <h2 className="detailTitle">{detail.name}</h2>
        <div className="detailDiets">
          {detail.diets &&
            detail.diets.map((d, i) => (
              <span key={i}>{d.name ? d.name : d + "  "}</span>
            ))}
        </div>
        <h4 className="detailHscore">Health Score: {detail.healthScore}</h4>
        <div className="detailTypes">{detail.types}</div>
        <p className="detailSummary">
          {detail.summary && detail.summary.replace(/<[^>]+>/g, "")}
        </p>
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
