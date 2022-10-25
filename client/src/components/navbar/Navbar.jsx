import React from "react";
import SearchBar from "../recipes/SearchBar";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navContainer w-full flex flex-col items-center md:flex-row md:justify-center mb-3 animate-appear">
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
