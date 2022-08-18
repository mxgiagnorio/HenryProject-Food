import React from "react";
import "./Paginated.css";

export default function Paginated({ paginated, recipesPerPage, allRecipes }) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers &&
          pageNumbers.map(
            (
              number //si en pageNumber hay algo mapealo
            ) => (
              <span key={number}>
                <button className="btn" onClick={() => paginated(number)}>
                  {number}
                </button>{" "}
                {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
              </span>
            )
          )}
      </div>
    </nav>
  );
}
