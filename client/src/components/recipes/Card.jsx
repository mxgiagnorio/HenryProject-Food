import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, diets, id }) {
  return (
    <div className="container">
      <img className="img" src={image} alt="Not found" />
      <div className="head">
        <div className="aux">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="cardInfo" key={id}>
        <div className="aux">
          <h6>
            {diets?.map((diet, id) => (
              <span key={id}> {diet.name + "   "} </span>
            ))}
          </h6>
          <button className="detailsBtn">
            <Link to={`/recipe/${id}`}>
              <span>Details</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// .container {
//   width: 30%;
//   display: flex;
//   flex-direction: column;
//   margin: 1%;
//   height: 30%;
//   border-radius: 15px;

//   background-color: rgba(195, 218, 245, 0.8);
//   background-image: linear-gradient(-225deg, snow 0%, silver 100%);
// }

// .img {
//   height: 40%;
//   border-radius: 15px;
// }

// .head {
//   color: snow;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   justify-content: flex-start;
//   margin-top: 4%;
//   margin-left: 4%;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   text-align: start;
// }

// .aux {
//   /* display:inline; */
//   color: #0d0d0d;
//   margin: 1%;
//   width: 250px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   height: max-content;
//   font-size: 15px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;
// }

// .cardInfo {
//   color: snow;
//   margin-top: 5%;
//   margin-left: 4%;
//   text-align: start;
// }

// h6 {
//   color: #262626;
//   padding: 0%;
//   margin: 0%;
//   display: inline;
//   font-size: 15px;
// }

// h3 {
//   color: #0d0d0d;
//   display: grid;
//   padding: 0;
//   margin: 1%;
//   font-size: 20px;
//   margin-bottom: 0px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;
// }

// .detailsBtn {
//   display: flex;
//   width: 80%;
//   background-color: snow;
//   margin-top: 10px;
//   font-size: 20px;
//   height: 40px;
//   cursor: pointer;
//   justify-content: center;
//   align-items: center;
//   border-radius: 20px;
//   color: #0d0d0d;
// }
