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

  
  // const fetchData = () => {
  //   let dataURL = "http://localhost:3002/books";
  //   axios.get(dataURL).then((response) => setBooks(response.data))
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });;
  // };
  
  // useEffect(() => {
  //   fetchData();
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataURL = "http://localhost:3002/books";
        const response = await axios.get(dataURL);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [setBooks]);
  


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
