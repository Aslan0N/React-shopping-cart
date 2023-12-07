// React
import React, { useContext, useEffect } from "react";

// Axios
import axios from "axios";

// SingleCard
import SingleCard from "./SingleCard";

// Context
import { BasketContext } from "../Context/BasketContext";

const Home = () => {
  // Context
  const { books, setBooks } = useContext(BasketContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let dataURL = "http://localhost:3001/books";
    axios.get(dataURL).then((response) => setBooks(response.data));
  };

  return (
    <div className="container">
      <div className="row g-4">
        {books.map((book) => {
          return <SingleCard prop={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
