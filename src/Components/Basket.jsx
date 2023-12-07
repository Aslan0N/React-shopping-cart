// React
import React, { useContext } from "react";

// Context
import { BasketContext } from "../Context/BasketContext";

const Basket = () => {
  // Context
  const { basket, setBasket } = useContext(BasketContext);

  //   Handle Decrease
  const handleDecrease = (id) => {
    const updateBasket = basket
      .map((book) => {
        if (book.id === id) {
          if (book.count > 1) {
            return { ...book, count: book.count - 1 };
          } else {
            return null;
          }
        }
        return book;
      })
      .filter(Boolean);
    setBasket(updateBasket);
    // Local Storage Yenilənməsi
    localStorage.setItem("Books", JSON.stringify(updateBasket));
  };

  // Handle Increase
  const handleIncrease = (id) => {
    const updateBasket = basket.map((book) => {
      if (book.id === id) {
        return { ...book, count: book.count + 1 };
      }
      return book;
    });
    setBasket(updateBasket);
    // Local Storage Yenilənməsi
    localStorage.setItem("Books", JSON.stringify(updateBasket));
  };

  // Handle Remove
  const handleRemove = (id) => {
    const updatedBasket = basket.filter((book) => book.id !== id);

    setBasket(updatedBasket);

    // Local Storage Yenilənməsi
    localStorage.setItem("Books", JSON.stringify(updatedBasket));
  };

  return (
    <ul>
      {basket ? (
        basket.map((book) => {
          return (
            <li key={book.id}>
              <div>
                <img width={100} src={book.coverImage} alt="CoverImage" />
                <p>{book.title}</p>
                <button onClick={() => handleIncrease(book.id)}>(+)</button>
                <span>{book.count}</span>
                <button onClick={() => handleDecrease(book.id)}>(-)</button>
                <button onClick={() => handleRemove(book.id)}>Remove</button>
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
