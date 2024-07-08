import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRecipesNames } from "../../redux/actions";
import Swal from "sweetalert2";
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
      return Swal.fire("", "Busca una receta", "warning");
    } else {
      dispatch(getRecipesNames(name));
      setName("");
    }
  }

  return (
    <div className="searchBar">
      <input
        className="w-5/6 rounded-full h-full pl-4 border-2 outline-none"
        type="text"
        name="search"
        placeholder="Send me a message"
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
