import { React } from "react";
import { Link } from "react-router-dom";

export default function landingPage() {
  return (
    <div>
      <h3> Holis,Este es mi proyecto de FOODS </h3>
      <Link to="/Home ">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
