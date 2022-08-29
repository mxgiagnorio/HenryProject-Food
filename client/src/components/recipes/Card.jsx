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
          <h6> Diet types: </h6>
          <p>{diets}</p>
        </div>
        <div>
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

{
  /* <CardCont>
        
<Img src={image} alt= 'image' 
onClick={() => handleId(id)}/>


<Cabeza>
    <AuxContainer>
    <H3>{name}</H3> 
    </AuxContainer>
</Cabeza>

<Caracteristicas>
<AuxContainer>
 <H6>
 Diets Types:
 </H6> 
 {diets?.map((diet, index) => <> {diet}, </> )}
</AuxContainer>

<AuxContainer>
<H6>
  Dish Types:
</H6>
 {types?.map((dish, index)=> <> {dish.name ? dish.name : dish}, </>)}

</AuxContainer>


</Caracteristicas>

{/* <Precio>
     {}
</Precio> */
}

// </CardCont> */}
