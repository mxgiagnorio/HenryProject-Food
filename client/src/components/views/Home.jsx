import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import Card from "../recipes/Card";
import "./Home.css";
import Paginated from "../paginated/Paginated";

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

  return (
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
  );
}
