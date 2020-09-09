import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
        <h3>{ movie.title }</h3>
        <div><p>Description: { movie.description }</p></div>
        <div><p>Director: { movie.director }</p></div>
        <div><p>Producer: { movie.producer }</p></div>
        <div><p>Release Date: { movie.release_date }</p></div>
    </div>
  );
};

export default Movie;