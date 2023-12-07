// React
import { createContext, useEffect, useState } from "react";

// Context
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  // Books
  const [books, setBooks] = useState([]);

  // Basket
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const checkData = localStorage.getItem("Books");
    if (checkData) {
      setBasket(JSON.parse(checkData));
    }
  }, []);

  // Add book

  const addBook = (id) => {
    setBasket((prevBasket) => {
      const updatesBasket = prevBasket.map((book) => {
        if (book.id === id) {
          return { ...book, count: (book.count || 0) + 1 };
        }
        return book;
      });

      if (!updatesBasket.some((book) => book.id === id)) {
        const selectedbook = books.find((book) => book.id === id);
        if (selectedbook) {
          const newbook = {
            id: selectedbook.id,
            title: selectedbook.title,
            coverImage: selectedbook.coverImage,
            count: 1,
          };
          updatesBasket.push(newbook);
          let updated = [...basket, newbook];
          localStorage.setItem("Books", JSON.stringify(updated));
        }
      }
      return updatesBasket;
    });
  };
  return (
    <BasketContext.Provider
      value={{ addBook, basket, books, setBooks, setBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
