import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRecipesNames } from "../../redux/actions";
import "./SearchBar.css";

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRecipesNames());
  // }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name, "soy name");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Busca una receta");
    } else {
      dispatch(getRecipesNames(name));
      setName("");
    }
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        name="search"
        placeholder="example: pizza..."
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button
        className="btnSearch"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        SEARCH
      </button>
    </div>
  );
}
