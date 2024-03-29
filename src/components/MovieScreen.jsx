import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { movieList, page, setPage, list, addMovie, removeMovie } = props;

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });

  const decrement = () => {
    setPage(page - 1)
  };

  const increment = () => {
    setPage(page + 1)
  }

  return (
    <div className="page">
      <h1>John's Movie Theater</h1>
      <h3>Add a movie to your Watchlist!</h3>
      <div className="btn-container">
        <button onClick={page !== 1 ? decrement : null}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
