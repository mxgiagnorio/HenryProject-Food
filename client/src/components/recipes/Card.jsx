import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, diets, id }) {
  return (
    <div className="container">
      <div className="card" key={id}>
        <img className="img" src={image} alt="Not found" />
        <h3>{name}</h3>
        <p>{diets.name}</p>
        <div>
          <button>
            <Link to={`/recipe/${id}`}>
              <span>Details</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// {recipe.id} id={recipe.idApi ? recipe.idApi : recipe.id}
