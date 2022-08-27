import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getAllDiets, postRecipe } from "../../redux/actions";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "el nombre es requerido";
  } else if (!/^[a-zA-Z .]+$/.test(input.name)) {
    errors.name = "Solo se aceptan letras";
  }
  if (!input.summary) {
    errors.summary = "La descripcion es requerida";
  } else if (input.summary.length > 100) {
    errors.description = "La descripcion es muy larga. (Max = 100 caracteres)";
  }
  if (!input.steps) {
    errors.steps = "El paso a paso es requerido";
  }

  if (!input.healthScore) {
    errors.healthScore =
      "Este campo es requerido. Debe ser un numero del 0 a 100";
  } else if (input.healthScore > 100) {
    errors.healthScore = "No puede ser mayor a 100";
  } else if (input.healthScore < 0) {
    errors.healthScore = "No puede ser un numero negativo";
  }

  return errors; //la funcion validate devuelve el objeto errors, ya sea vacio o con alguna propiedad si es q encuentra un error
}

export default function CreateRecipe() {
  const [input, setInput] = useState({
    image: "",
    name: "",
    summary: "",
    healthScore: "",
    diets: [],
    steps: "",
  });

  const [errors, setErrors] = useState({}); //me creo un estado local, en donde errors = {}
  const dispatch = useDispatch();
  //const history = useHistory();
  const diets = useSelector((state) => state.allDiets);

  function handleSubmit(e) {
    e.preventDefault();
    let error = Object.keys(validate(input)); // Object.keys(errors) --> errors = {} => devuelve un array de strings q representa todas las propiedades del objeto
    //solo habra propiedades si es que HAY ALGUN ERROR
    if (error.length !== 0 || !input.diets.length) {
      //Entonces si hay algun error, error va a ser un array con la propiedad en donde haya un error, osea que su length !== 0
      alert("Llene los campos correctamente");
      return;
    } else {
      dispatch(postRecipe(input));
      setInput({
        image: "",
        name: "",
        summary: "",
        healthScore: "",
        diets: [],
        steps: "",
      });
      alert("receta creada con exito");
      //history.push("/home");
    }
  }

  function handleChange(e) {
    //Cada vez q se ejecute esta function se agrega a mi estado input todo lo que ya tenia + lo que se este modificando en ese momento (puede ser el name, summary,image..etc)
    setInput({
      ...input,
      [e.target.name]: e.target.value, //esto es como, dame el target.value del name que pusiste en el input
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setInput({
      ...input,
      diets: input.diets.includes(e.target.value)
        ? input.diets
        : [...input.diets, e.target.value],
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
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>summary:</label>
          <input
            type="text"
            value={input.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
          />
          {errors.summary && <p>{errors.summary}</p>}
        </div>
        <div>
          <label>Health Score:</label>
          <input
            type="number"
            value={input.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
          />
          {errors.healthScore && <p>{errors.healthScore}</p>}
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
          {errors.steps && <p>{errors.steps}</p>}
        </div>
        <button type="submit">Crear receta</button>
        <ul>
          <li>{input.diets.map((el) => el + " ,")}</li>
        </ul>
      </form>
    </div>
  );
}
