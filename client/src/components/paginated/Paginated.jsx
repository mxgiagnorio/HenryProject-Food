import React from "react";
import "./Paginated.css";

export default function Paginated({
  paginated,
  recipesPerPage,
  allRecipes,
  currentPage,
}) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {" "}
      {pageNumbers.length > 1 && (
        <span className="previous" key="prev">
          <button
            onClick={() => {
              if (currentPage > 1) {
                paginated(currentPage - 1);
              }
            }}
          >
            Previous
          </button>
        </span>
      )}
      {pageNumbers?.map((number) => (
        <span key={number}>
          <button onClick={() => paginated(number)}>{number}</button>
        </span>
      ))}
      {pageNumbers.length > 1 && (
        <span key="next">
          <button
            onClick={() => {
              if (currentPage < pageNumbers.length) {
                paginated(currentPage + 1);
              }
            }}
          >
            Next
          </button>
        </span>
      )}
    </div>
  );
}
//   return (
//     <nav>
//       <div className="pagination">
//         {pageNumbers &&
//           pageNumbers.map(
//             (
//               number //si en pageNumber hay algo mapealo
//             ) => (
//               <span key={number}>
//                 <button onClick={() => paginated(number)}>{number}</button>{" "}
//                 {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
//               </span>
//             )
//           )}
//       </div>
//     </nav>
//   );
// }
