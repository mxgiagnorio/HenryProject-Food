import { React } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function landingPage() {
  return (
    <div>
      <div className="background">
        <Link to="/Home">
          <button className="enter">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
