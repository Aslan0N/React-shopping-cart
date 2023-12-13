// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import { decrease, increase } from "../Redux/Action";

const Basket = () => {
  
  // Reducer
  const basket = useSelector((store) => store.BasketReducer);

  const dispatch = useDispatch();
  return (
    <ul>
      {basket ? (
        basket.map((book) => {
          return (
            <li key={book.id}>
              <div>
                <img width={100} src={book.coverImage} alt="CoverImage" />
                <p>{book.title}</p>
                <button onClick={() => dispatch(increase(book.id))}>(+)</button>
                <span>{book.count}</span>
                <button onClick={() => dispatch(decrease(book.id))}>(-)</button>
              </div>
            </li>
          );
        })
      ) : (
        <p>No items in the basket</p>
      )}
    </ul>
  );
};

export default Basket;
