import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getAllDiets, postRecipe } from "../../redux/actions";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  //const history = useHistory();
  const diets = useSelector((state) => state.allDiets);

  const [input, setInput] = useState({
    image: "",
    name: "",
    summary: "",
    healthScore: "",
    diets: [],
    steps: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipe(input));
    alert("receta creada con exito");
    setInput({
      image: "",
      name: "",
      summary: "",
      healthScore: "",
      diets: [],
      steps: "",
    });
    //history.push("/home");
  }

  function handleChange(e) {
    //Cada vez q se ejecute esta function agregale a mi estado input, todo lo que ya tenia + lo que se este modificando en ese momento (puede ser el name, summary,image..etc)
    setInput({
      ...input,
      [e.target.name]: e.target.value, //esto es como, dame el target.value del name que pusiste en el input
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  }

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <button>volver al home</button>
      </Link>
      <h1>Crea tu propia receta</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>image:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>summary:</label>
          <input
            type="text"
            value={input.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Health Score:</label>
          <input
            type="text"
            value={input.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Diets:</label>
          <select onChange={(e) => handleSelect(e)}>
            {diets.map((diet) => (
              <option key={diet.id} value={diet.name}>
                {diet.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Steps:</label>
          <input
            type="text"
            value={input.steps}
            name="steps"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">Crear receta</button>
        <ul>
          <li>{input.diets.map((el) => el + " ,")}</li>
        </ul>
      </form>
    </div>
  );
}
