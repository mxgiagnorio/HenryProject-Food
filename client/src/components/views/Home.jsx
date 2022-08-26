import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRecipes,
  filterbyDiets,
  filterCreated,
  sortFilter,
  getAllDiets,
  sortByHealthScore,
} from "../../redux/actions";
import Card from "../recipes/Card";
import "./Home.css";
import Paginated from "../paginated/Paginated";
import Navbar from "../navbar/Navbar";

export default function Home() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const allDiets = useSelector((state) => state.allDiets);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(" ");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const lastRecipeInPage = currentPage * recipesPerPage;
  const firstRecipeInPage = lastRecipeInPage - recipesPerPage;
  const currentRecipe = allRecipes.slice(firstRecipeInPage, lastRecipeInPage);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  function handlerFilterDiets(e) {
    e.preventDefault();
    dispatch(filterbyDiets(e.target.value));
  }

  function handlerFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }
  function handlerHealthScore(e) {
    e.preventDefault();
    dispatch(sortByHealthScore(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }
  function handlerSort(e) {
    e.preventDefault();
    dispatch(sortFilter(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }
  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(getAllRecipes());
  // }
  {
    /* <button
    onClick={(e) => {
      handleClick(e);
    }}
  >
    Reset filters
  </button> */
  }
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="filter-container">
        <div className="order">
          <select onChange={(e) => handlerSort(e)}>
            <option value="reset">Order by default</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        <div className="filterScore">
          <select
            onChange={(e) => handlerHealthScore(e)}
            defaultValue="Order by score"
          >
            <option value="reset">Health Score by default</option>
            <option value="up">0-100</option>
            <option value="down">100-0</option>
          </select>
        </div>
        <div className="filterType">
          <select onChange={(e) => handlerFilterDiets(e)}>
            <option value="All Diets"> All Diets</option>
            {allDiets?.map((diet) => (
              <option key={diet.id} value={diet.name}>
                {diet.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filterRecipes">
          <select onChange={(e) => handlerFilterCreated(e)}>
            <option disabled>Filter</option>
            <option value="All">All</option>
            <option value="Created">Created</option>
            <option value="API">API</option>
          </select>
        </div>
      </div>
      <div className="container">
        {currentRecipe?.map((element) => {
          return (
            <div className="cardContainer" key={element.id}>
              <Card
                id={element.id}
                name={element.name}
                image={element.image}
                diets={element.diets?.map((diet) => diet).join(", ")}
              />
            </div>
          );
        })}
        <Paginated
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginated={paginated}
        />
      </div>
    </div>
  );
}
