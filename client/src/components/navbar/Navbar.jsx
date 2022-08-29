import React from "react";
import SearchBar from "../recipes/SearchBar";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navContainer">
        <h1 className="navTitle">H E N R Y F O O D S</h1>
        <SearchBar />
        <div>
          <Link to="/recipes">
            <button className="btnCreate">Create your recipe</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
