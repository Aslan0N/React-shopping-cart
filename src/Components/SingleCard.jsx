// React
import React, { useContext } from "react";

// Context
import { BasketContext } from "../Context/BasketContext";

const SingleCard = ({ prop }) => {
  // Context
  const { addBook } = useContext(BasketContext);

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
      <div className="card-con">
        <div className="image">
          <img width={200} src={prop.coverImage} alt="" />
        </div>
        <div className="content">
          <h6>{prop.title}</h6>
          <h5>{prop.author}</h5>
          <p>{prop.price}$</p>
        </div>
        <button onClick={() => addBook(prop.id)}>Add to basket</button>
      </div>
    </div>
  );
};

export default SingleCard;
