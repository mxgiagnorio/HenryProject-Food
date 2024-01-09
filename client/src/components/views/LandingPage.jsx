import { React } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function landingPage() {
  return (
    <div>
      <div className="background">
        <h3 className="title text-3xl font-bold underline">
          {" "}
          RANDOM'S RECIPES
        </h3>
        <Link to="/Home">
          <button className="enter">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
