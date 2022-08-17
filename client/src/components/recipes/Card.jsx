import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, diets, id }) {
  return (
    <div className="container">
      <div key={id}>
        <img className="img" src={image} alt="Not found" />
        <h3>{name}</h3>
        <p>{diets}</p>
        <div>
          <NavLink to={`/recipe/${id}`}>
            <span>Details</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
