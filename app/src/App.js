import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchMovies } from "./store/actions";
import Movies from "./components/Movies";

const App = ({ fetchMovies, loadingMovies, errorMessage }) => {
  useEffect( () => {
    fetchMovies();
  }, [ fetchMovies ]);

  return (
    <div>
      <h1>
        Collection of Ghibli Movies
      </h1>
      { !loadingMovies ? <Movies /> : <div>... Fetching movies</div> }
      { errorMessage !== "" ? <div>{ errorMessage }</div> : null }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loadingMovies: state.loadingMovies,
    errorMessage: state.errorMessage
  };
};

export default connect( mapStateToProps, { fetchMovies })( App );
