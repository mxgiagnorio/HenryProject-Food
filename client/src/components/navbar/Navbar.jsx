import React from "react";
import SearchBar from "../recipes/SearchBar";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllRecipes());
  }
  // { <div>
  //       <button
  //         onClick={(e) => {
  //           handleClick(e);
  //         }}
  //       >
  //         refresh
  //       </button>
  //     </div>}
  return (
    <nav className="h-full flex-row sm:justify-center items-center mb-6">
      <div className="navContainer w-full flex flex-col items-center md:flex-row md:justify-center mb-6 animate-appear">
        <Link to="/home">
          <h1 onClick={(e) => handleClick(e)} className="navTitle">
            RANDOM MEALS
          </h1>
        </Link>
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
