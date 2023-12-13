// React
import React from "react";

// Redux
import { useDispatch } from "react-redux";

// Action
import { addBasket } from "../Redux/Action";

const SingleCard = ({ prop }) => {
  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(addBasket(prop))}>Add to basket</button>
      </div>
    </div>
  );
};

export default SingleCard;
