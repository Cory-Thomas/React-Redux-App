import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { fetchMovies } from "./store/actions";
import Movies from "./components/Movies";

const App = ({ fetchMovies, loadingMovies, errorMessage }) => {
  const StyledDiv = styled.div`
    background-color: white;
    text-align: center;
    width: 25%;
    padding: 2%;
    border-radius: 100px;
    margin: 2% auto;
  `;

  useEffect( () => {
    fetchMovies();
  }, [ fetchMovies ]);

  return (
    <>
    <StyledDiv>
      <h1>
        Collection of Ghibli Movies
      </h1></StyledDiv>
      { !loadingMovies ? <Movies /> : <div>... Fetching movies</div> }
      { errorMessage !== "" ? <div>{ errorMessage }</div> : null }
    </>
  );
};

const mapStateToProps = state => {
  return {
    loadingMovies: state.loadingMovies,
    errorMessage: state.errorMessage
  };
};

export default connect( mapStateToProps, { fetchMovies })( App );
