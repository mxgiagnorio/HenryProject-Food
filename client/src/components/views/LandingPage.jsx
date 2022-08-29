import { React } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function landingPage() {
  return (
    <div>
      <div className="background">
        <h3 className="title"> H E N R Y F O O D S</h3>
        <Link to="/Home">
          <button className="enter">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
