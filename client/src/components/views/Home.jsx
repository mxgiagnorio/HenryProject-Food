import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import Card from "../recipes/Card";

export default function Home() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div>
      {allRecipes?.map((element) => {
        return (
          <div key={element.id}>
            <Card
              id={element.id}
              name={element.name}
              image={element.image}
              diets={element.diets?.map((diet) => diet).join(", ")}
            />
          </div>
        );
      })}
      : <h2>Loading</h2>
    </div>
  );
}
