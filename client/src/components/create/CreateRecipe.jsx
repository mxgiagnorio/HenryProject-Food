import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getAllDiets, postRecipe } from "../../redux/actions";
import "./CreateRecipe.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "el nombre es requerido";
  } else if (!/^[a-zA-Z .]+$/.test(input.name)) {
    errors.name = "Solo se aceptan letras";
  } else if (input.name[0] === " ") {
    errors.name = "No puedes comenzar con un espacio vacio";
  }
  if (!input.summary) {
    errors.summary = "La descripcion es requerida";
  } else if (input.summary.length > 100) {
    errors.summary = "La descripcion es muy larga. (Max = 100 caracteres)";
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

  function handleDelete(el) {
    setInput({
      ...input,
      diets: input.diets.filter((diet) => diet !== el),
    });
  }

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  return (
    <div className="formContainer">
      <Link to="/home">
        <button className="buttonBack">Back to home</button>
      </Link>
      <h1 className="formTitle">Create your recipe</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="infoContainer">
          <div className="info">
            <label>IMAGE:</label>
            <input
              type="url"
              value={input.image}
              name="image"
              onChange={handleChange}
            />
          </div>
          <div className="info">
            <label>NAME</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="info">
            <label className="summary">SUMMARY</label>
            <input
              type="text"
              value={input.summary}
              name="summary"
              onChange={(e) => handleChange(e)}
            />
            {errors.summary && <p className="error">{errors.summary}</p>}
          </div>
          <div className="info">
            <label className="healthScore">HEALTH SCORE</label>
            <input
              type="number"
              value={input.healthScore}
              name="healthScore"
              onChange={(e) => handleChange(e)}
            />
            {errors.healthScore && (
              <p className="error">{errors.healthScore}</p>
            )}
          </div>
          <div className="info">
            <label className="steps">STEPS</label>
            <input
              type="text"
              value={input.steps}
              name="steps"
              onChange={(e) => handleChange(e)}
            />
            {errors.steps && <p className="error">{errors.steps}</p>}
          </div>
          <div className="info">
            <label>DIETS</label>
            <select onChange={(e) => handleSelect(e)}>
              {diets.map((diet) => (
                <option key={diet.id} value={diet.name}>
                  {diet.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="list">
          <li>{input.diets.map((el) => el + " ,")}</li>
        </ul>

        <button className="buttonCreate" type="submit">
          create!
        </button>
      </form>
      {/* {input.diets.map((el) => (
        <div className="borrar">
          <p>{el}</p>
          <button onClick={() => handleDelete(el)}>X</button>
        </div>
      ))} */}
    </div>
  );
}

//https://vinomanos.com/wp-content/uploads/2021/06/Pasta-1-min.jpg
