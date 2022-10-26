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
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
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

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      {/* <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          refresh
        </button>
      </div> */}
      <div className="filterContainer w-full flex flex-col items-center md:flex-row justify-center mt-10 animate-appear">
        <span className="filter">Order Filter</span>
        <select onChange={(e) => handlerSort(e)}>
          <option value="reset">Order by default</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>

        <span className="filter">Order by Health Score</span>
        <select
          onChange={(e) => handlerHealthScore(e)}
          defaultValue="Order by score"
        >
          <option value="reset">Health Score by default</option>
          <option value="down">High</option>
          <option value="up">Low</option>
        </select>

        <span className="filter">Filter diets</span>
        <select onChange={(e) => handlerFilterDiets(e)}>
          <option value="All Diets"> All Diets</option>
          {allDiets?.map((diet) => (
            <option key={diet.id} value={diet.name}>
              {diet.name}
            </option>
          ))}
        </select>

        <span className="filter">Created</span>
        <select onChange={(e) => handlerFilterCreated(e)}>
          <option disabled>Filter</option>
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="API">API</option>
        </select>
      </div>

      <div className="mainContainer">
        {allRecipes.length > 0 ? (
          <div className="containerCards">
            <div className="sideContainer">
              {currentRecipe?.map((element) => {
                return (
                  <>
                    <Card
                      key={element.id}
                      id={element.id}
                      name={element.name}
                      image={element.image}
                      diets={element.diets}
                    />
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <span>loading</span>
        )}
      </div>

      <div className="ContainerPag">
        <Paginated
          key={1}
          currentPage={currentPage}
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginated={paginated}
        />
      </div>
    </div>
  );
}

// allRecipes={allRecipes ? allRecipes.length : ""}
