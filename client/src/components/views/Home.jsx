import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, filterbyDiets } from "../../redux/actions";
import Card from "../recipes/Card";
import "./Home.css";
import Paginated from "../paginated/Paginated";
import Navbar from "../navbar/Navbar";

export default function Home() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();

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

  function handlerFilterDiets(e) {
    e.preventDefault();
    dispatch(filterbyDiets(e.target.value));
  }

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="filter-container">
        <div className="order">
          <select defaultValue="Filter by Order">
            <option disabled>Filter by Order</option>
            <option key="up" value="up">
              Upward
            </option>
            <option key="down" value="down">
              Descendant
            </option>
          </select>
        </div>

        <div className="filterType">
          <select onChange={(e) => handlerFilterDiets(e)}>
            <option value="All diets">All Diets</option>
            <option value="vegan">Vegan</option>
            <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
            <option value="dairy free">Dairy free</option>
            <option value="gluten free">Gluten free</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="fodmap friendly">Fodmap friendly</option>
          </select>
        </div>

        <div className="filterScore">
          <select defaultValue="Order by score">
            <option disabled>Order by score</option>
            <option key="SSc" value="SSc">
              Spooncular Score
            </option>
            <option key="HSc" value="HSc">
              health Score
            </option>
          </select>
        </div>
        <div className="filterRecipes">
          <select>
            <option disabled>Filter</option>
            <option value="all">All</option>
            <option value="created">Created</option>
            <option value="api">API</option>
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
        : <h2>Loading</h2>
      </div>
    </div>
  );
}
