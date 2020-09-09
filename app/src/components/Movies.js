import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <>
      <h2>Movies: </h2>
      { movies.map( movie => {
        return <Movie key={ movie.id } movie={ movie } />
      })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect( mapStateToProps, {})( Movies );