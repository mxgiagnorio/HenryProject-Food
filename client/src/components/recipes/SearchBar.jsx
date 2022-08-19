import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesNames } from "../../redux/actions";
import "./SearchBar.css";

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipesNames(name));
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="example: pizza..."
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button type="sumit" onClick={(e) => handleSubmit(e)}>
        BUSCAR
      </button>
    </div>
  );
}