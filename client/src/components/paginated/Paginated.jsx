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
    <div className="pagination ">
      {" "}
      {pageNumbers.length > 1 && (
        <span
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          key="prev"
        >
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
        <span
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          key={number}
        >
          <button onClick={() => paginated(number)}>{number}</button>
        </span>
      ))}
      {pageNumbers.length > 1 && (
        <span
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          key="next"
        >
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
