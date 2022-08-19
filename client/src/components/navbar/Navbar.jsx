import React from "react";
import SearchBar from "../recipes/SearchBar";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <img
          className="logo"
          src="https://i.pinimg.com/564x/77/0a/18/770a18bdd112d8f8ea0d821c4d8fc208.jpg"
          alt="Logo"
        />
      </div>
      <div>
        <SearchBar />
      </div>
      <Link to="/recipe">
        <button className="button">New Recipe</button>
      </Link>
    </div>
  );
}
